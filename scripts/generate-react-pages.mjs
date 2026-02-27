import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const ROUTES_FILE = path.join(ROOT, "public", "mirror", "routes.json");
const SRC_DIR = path.join(ROOT, "src");
const PAGES_ROOT = path.join(SRC_DIR, "pages");
const GENERATED_DIR = path.join(SRC_DIR, "generated");
const COMPONENTS_DIR = path.join(SRC_DIR, "components");
const NAV_DIR = path.join(COMPONENTS_DIR, "navigation");
const HOOKS_DIR = path.join(SRC_DIR, "hooks");
const CONFIG_DIR = path.join(SRC_DIR, "config");

const toPascal = (value) =>
  value
    .split(/[^a-zA-Z0-9]/g)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");

const escapeTemplate = (value) => value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const toRelativeImport = (fromFile, toFileWithoutExt) => {
  const rel = path.relative(path.dirname(fromFile), toFileWithoutExt).replace(/\\/g, "/");
  if (!rel.startsWith(".")) return `./${rel}`;
  return rel;
};

const routeToComponentName = (route) => {
  if (route === "/") return "HomePage";
  return `${toPascal(route.replace(/^\//, "").replace(/\//g, "-"))}Page`;
};

const computePageDir = (route, allRoutes) => {
  if (route === "/") return path.join(PAGES_ROOT, "home");
  const segments = route.replace(/^\//, "").split("/");
  const hasChildren = allRoutes.some((other) => other !== route && other.startsWith(`${route}/`));
  if (hasChildren) {
    return path.join(PAGES_ROOT, ...segments, "index-page");
  }
  return path.join(PAGES_ROOT, ...segments);
};

const cleanGeneratedTree = async () => {
  await fs.rm(PAGES_ROOT, { recursive: true, force: true });
  await fs.rm(GENERATED_DIR, { recursive: true, force: true });
  await fs.mkdir(PAGES_ROOT, { recursive: true });
  await fs.mkdir(GENERATED_DIR, { recursive: true });
  await fs.mkdir(COMPONENTS_DIR, { recursive: true });
  await fs.mkdir(NAV_DIR, { recursive: true });
  await fs.mkdir(HOOKS_DIR, { recursive: true });
  await fs.mkdir(CONFIG_DIR, { recursive: true });
};

const writeSharedFiles = async ({ desktopHeaderHtml, mobileSideMenuHtml }) => {
  const rawHtmlPath = path.join(COMPONENTS_DIR, "RawHtmlBlock.jsx");
  const useAssetsPath = path.join(HOOKS_DIR, "usePageAssets.js");
  const visibilityPath = path.join(CONFIG_DIR, "pageVisibility.js");
  const desktopNavPath = path.join(NAV_DIR, "DesktopHeader.jsx");
  const mobileNavPath = path.join(NAV_DIR, "MobileSideMenu.jsx");

  await fs.writeFile(
    rawHtmlPath,
    `function RawHtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default RawHtmlBlock;
`,
    "utf8"
  );

  try {
    await fs.access(useAssetsPath);
  } catch {
    await fs.writeFile(
      useAssetsPath,
      `import { useEffect } from "react";

function usePageAssets({ title, links = [], styles = [], scripts = [] }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = title;
    }

    const added = [];

    links.forEach((href) => {
      if (!href) return;
      const existing = document.head.querySelector(\`link[data-mirror-link="\${href}"]\`);
      if (existing) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.setAttribute("data-mirror-link", href);
      document.head.appendChild(link);
      added.push(link);
    });

    styles.forEach((css, idx) => {
      if (!css) return;
      const style = document.createElement("style");
      style.type = "text/css";
      style.setAttribute("data-mirror-style", String(idx));
      style.textContent = css;
      document.head.appendChild(style);
      added.push(style);
    });

    scripts.forEach((scriptDef, idx) => {
      if (!scriptDef) return;
      const script = document.createElement("script");
      script.setAttribute("data-mirror-script", String(idx));
      if (scriptDef.src) {
        script.src = scriptDef.src;
        script.async = false;
      } else if (scriptDef.inline) {
        script.text = scriptDef.inline;
      }
      document.body.appendChild(script);
      added.push(script);
    });

    return () => {
      added.forEach((node) => node.remove());
      document.title = previousTitle;
    };
  }, [title, links, styles, scripts]);
}

export default usePageAssets;
`,
      "utf8"
    );
  }

  try {
    await fs.access(visibilityPath);
  } catch {
    await fs.writeFile(
      visibilityPath,
      `// Add route paths here to hide them temporarily from routing and navigation.
// Example: export const HIDDEN_ROUTES = ["/about-us", "/blog"];
export const HIDDEN_ROUTES = [];
`,
      "utf8"
    );
  }

const navHelpers = `const toRoute = (href) => {
  if (!href) return "";
  if (href.startsWith("/mirror/pages/")) {
    const slug = href.replace("/mirror/pages/", "").replace(/\\.html$/, "");
    if (slug === "index") return "/";
    return "/" + slug;
  }
  return "";
};

const removeHiddenLinks = (root) => {
  if (!root) return;
  root.querySelectorAll("a[href]").forEach((a) => {
    const route = toRoute(a.getAttribute("href"));
    if (!route || !HIDDEN_ROUTES.includes(route)) return;

    const wrapper = a.closest("li, .menu-item, .nav-item");
    if (wrapper) {
      wrapper.remove();
    } else {
      a.remove();
    }
  });
};`;

  try {
    await fs.access(desktopNavPath);
  } catch {
    await fs.writeFile(
      desktopNavPath,
      `import { useEffect, useRef } from "react";
import RawHtmlBlock from "../RawHtmlBlock.jsx";
import { HIDDEN_ROUTES } from "../../config/pageVisibility.js";

const html = \`${escapeTemplate(desktopHeaderHtml || "")}\`;

${navHelpers}

function DesktopHeader() {
  const rootRef = useRef(null);

  useEffect(() => {
    removeHiddenLinks(rootRef.current);
  }, []);

  return (
    <div ref={rootRef} data-shared-nav="desktop">
      <RawHtmlBlock html={html} />
    </div>
  );
}

export default DesktopHeader;
`,
      "utf8"
    );
  }

  try {
    await fs.access(mobileNavPath);
  } catch {
    await fs.writeFile(
      mobileNavPath,
      `import { useEffect, useRef } from "react";
import RawHtmlBlock from "../RawHtmlBlock.jsx";
import { HIDDEN_ROUTES } from "../../config/pageVisibility.js";

const html = \`${escapeTemplate(mobileSideMenuHtml || "")}\`;

${navHelpers}

function MobileSideMenu() {
  const rootRef = useRef(null);

  useEffect(() => {
    removeHiddenLinks(rootRef.current);
  }, []);

  return (
    <div ref={rootRef} data-shared-nav="mobile">
      <RawHtmlBlock html={html} />
    </div>
  );
}

export default MobileSideMenu;
`,
      "utf8"
    );
  }
};

const getHeadData = ($) => {
  const title = $("head title").first().text().trim();
  const links = [];
  $("head link[href]").each((_, el) => {
    const rel = (($(el).attr("rel") || "") + "").toLowerCase();
    const href = $(el).attr("href");
    if (!href) return;
    if (rel.includes("stylesheet")) links.push(href);
    if (rel.includes("preload") && (($(el).attr("as") || "") + "").toLowerCase() === "style") links.push(href);
  });
  const styles = $("head style")
    .toArray()
    .map((el) => $(el).html() || "")
    .filter(Boolean);
  return { title, links: [...new Set(links)], styles };
};

const getBodySections = ($) =>
  $("body")
    .children()
    .toArray()
    .filter((el) => el.type === "tag" && el.name !== "script");

const getBodyScripts = ($) =>
  $("body script")
    .toArray()
    .map((el) => {
      const src = $(el).attr("src");
      if (src) return { src };
      const type = ($(el).attr("type") || "").toLowerCase();
      if (type === "application/ld+json") return null;
      const inline = $(el).html() || "";
      if (!inline.trim()) return null;
      return { inline };
    })
    .filter(Boolean);

const isDesktopHeaderSection = (html) => html.includes('<header class="sp-sticky');
const isMobileMenuSection = (html) => html.includes('<div class="side-menu-wrap');
const stripTrackingNoscript = (html) =>
  html.replace(
    /<noscript>\s*<iframe[^>]*googletagmanager\.com\/ns\.html[^>]*>\s*<\/iframe>\s*<\/noscript>/gi,
    ""
  );

const createPageFiles = async ({ route, htmlPath, allRoutes }) => {
  const absoluteHtml = path.join(ROOT, "public", htmlPath.replace(/^\//, "").replace(/\//g, path.sep));
  const html = await fs.readFile(absoluteHtml, "utf8");
  const $ = cheerio.load(html, { decodeEntities: false });

  const { title, links, styles } = getHeadData($);
  const sections = getBodySections($);
  const scripts = getBodyScripts($);

  const pageDir = computePageDir(route, allRoutes);
  const sectionsDir = path.join(pageDir, "sections");
  await fs.mkdir(sectionsDir, { recursive: true });

  const sectionImports = [];
  const sectionNodes = [];

  for (let i = 0; i < sections.length; i += 1) {
    const sectionName = `Section${String(i + 1).padStart(2, "0")}`;
    const sectionFile = path.join(sectionsDir, `${sectionName}.jsx`);
    const sectionHtml = stripTrackingNoscript($.html(sections[i]));
    if (!sectionHtml.trim()) {
      continue;
    }

    let sectionContent = "";

    if (isDesktopHeaderSection(sectionHtml)) {
      const desktopImport = toRelativeImport(sectionFile, path.join(NAV_DIR, "DesktopHeader").replace(/\\/g, "/"));
      sectionContent = `import DesktopHeader from "${desktopImport}.jsx";

function ${sectionName}() {
  return <DesktopHeader />;
}

export default ${sectionName};
`;
    } else if (isMobileMenuSection(sectionHtml)) {
      const mobileImport = toRelativeImport(sectionFile, path.join(NAV_DIR, "MobileSideMenu").replace(/\\/g, "/"));
      sectionContent = `import MobileSideMenu from "${mobileImport}.jsx";

function ${sectionName}() {
  return <MobileSideMenu />;
}

export default ${sectionName};
`;
    } else {
      const escapedHtml = escapeTemplate(sectionHtml);
      const rawHtmlImport = toRelativeImport(sectionFile, path.join(COMPONENTS_DIR, "RawHtmlBlock").replace(/\\/g, "/"));
      sectionContent = `import RawHtmlBlock from "${rawHtmlImport}.jsx";

const html = \`${escapedHtml}\`;

function ${sectionName}() {
  return <RawHtmlBlock html={html} />;
}

export default ${sectionName};
`;
    }

    await fs.writeFile(sectionFile, sectionContent, "utf8");
    sectionImports.push(`import ${sectionName} from "./sections/${sectionName}";`);
    sectionNodes.push(`      <${sectionName} />`);
  }

  const pageName = routeToComponentName(route);
  const escapedTitle = escapeTemplate(title || "Red Taxi");
  const linksJson = JSON.stringify(links);
  const stylesJson = JSON.stringify(styles);
  const scriptsJson = JSON.stringify(scripts);
  const hookImport = toRelativeImport(path.join(pageDir, "index.jsx"), path.join(HOOKS_DIR, "usePageAssets").replace(/\\/g, "/"));

  const pageContent = `import { useMemo } from "react";
import usePageAssets from "${hookImport}.js";
${sectionImports.join("\n")}

function ${pageName}() {
  const links = useMemo(() => ${linksJson}, []);
  const styles = useMemo(() => ${stylesJson}, []);
  const scripts = useMemo(() => ${scriptsJson}, []);

  usePageAssets({
    title: \`${escapedTitle}\`,
    links,
    styles,
    scripts,
  });

  return (
    <>
${sectionNodes.join("\n")}
    </>
  );
}

export default ${pageName};
`;

  await fs.writeFile(path.join(pageDir, "index.jsx"), pageContent, "utf8");
  return { route, pageDir, componentName: pageName };
};

const writeRouteRegistry = async (items) => {
  const routeFile = path.join(GENERATED_DIR, "pageRoutes.jsx");
  const imports = items
    .map((item) => {
      const pageIndexWithoutExt = path.join(item.pageDir, "index").replace(/\\/g, "/");
      const rel = toRelativeImport(routeFile, pageIndexWithoutExt);
      return `import ${item.componentName} from "${rel}.jsx";`;
    })
    .join("\n");

  const routeArray = items.map((item) => `  { path: "${item.route}", component: ${item.componentName} }`).join(",\n");

  const content = `${imports}

const pageRoutes = [
${routeArray}
];

export default pageRoutes;
`;

  await fs.writeFile(routeFile, content, "utf8");
};

const getNavShell = async (routeMap) => {
  const homePath = path.join(ROOT, "public", routeMap["/"].replace(/^\//, "").replace(/\//g, path.sep));
  const html = await fs.readFile(homePath, "utf8");
  const $ = cheerio.load(html, { decodeEntities: false });

  const desktopHeaderHtml = $.html($("body > header.sp-sticky").first()) || "";
  const mobileSideMenuHtml = $.html($("body > .side-menu-wrap").first()) || "";

  return { desktopHeaderHtml, mobileSideMenuHtml };
};

const run = async () => {
  const raw = await fs.readFile(ROUTES_FILE, "utf8");
  const routeMap = JSON.parse(raw);
  const allRoutes = Object.keys(routeMap);

  await cleanGeneratedTree();
  const navShell = await getNavShell(routeMap);
  await writeSharedFiles(navShell);

  const created = [];
  for (const route of allRoutes) {
    const htmlPath = routeMap[route];
    const item = await createPageFiles({ route, htmlPath, allRoutes });
    created.push(item);
    console.log(`Generated: ${route}`);
  }

  await writeRouteRegistry(created);
  console.log(`Done. React pages generated: ${created.length}`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
