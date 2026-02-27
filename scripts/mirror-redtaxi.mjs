import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import axios from "axios";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const OUT_ROOT = path.join(ROOT, "public", "mirror");
const PAGES_DIR = path.join(OUT_ROOT, "pages");
const ASSETS_DIR = path.join(OUT_ROOT, "assets");

const BASE_ORIGIN = "https://www.redtaxi.co.in";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const assetCache = new Map();
const ROUTE_ALIASES = {
  "/traveller": "/tempo-traveller-booking",
  "/urbania": "/urbania-van-booking",
  "/blogs": "/blog",
  "/book-a-trip": "/booking",
  "/madurai-taxi": "/madurai-cab-booking",
};

const sanitizePathPart = (v) => v.replace(/[^a-zA-Z0-9._/-]/g, "-");

const ensureDir = async (dir) => fs.mkdir(dir, { recursive: true });

const isBikeRoute = (pathname) => /(^|\/|-)bike(-|\/|$)/i.test(pathname);

const normalizeRoute = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }
  const clean = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return clean || "/";
};

const routeToFile = (route) => {
  if (route === "/") return "index.html";
  return `${route.replace(/^\//, "")}.html`;
};

const fileToWebPath = (filePath) => `/mirror/pages/${filePath.replace(/\\/g, "/")}`;
const ALIAS_PAGES = {
  "urbania.html": "/mirror/pages/urbania-van-booking.html",
  "traveller.html": "/mirror/pages/tempo-traveller-booking.html",
  "blogs.html": "/mirror/pages/blog.html",
  "book-a-trip.html": "/mirror/pages/booking.html",
  "madurai-taxi.html": "/mirror/pages/madurai-cab-booking.html",
};

const parseLocs = (xml) => {
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1]).filter(Boolean);
};

const isSkippableAsset = (value) =>
  !value ||
  value.startsWith("data:") ||
  value.startsWith("javascript:") ||
  value.startsWith("mailto:") ||
  value.startsWith("tel:") ||
  value.startsWith("#");

const assetLocalPath = (assetUrl) => {
  const u = new URL(assetUrl);
  let pathname = u.pathname || "/";
  if (pathname.endsWith("/")) pathname += "index";
  let rel = `${u.hostname}${pathname}`;
  if (u.search) {
    const qHash = crypto.createHash("sha1").update(u.search).digest("hex").slice(0, 10);
    const ext = path.extname(rel);
    if (ext) {
      rel = `${rel.slice(0, -ext.length)}.${qHash}${ext}`;
    } else {
      rel = `${rel}.${qHash}`;
    }
  }
  return sanitizePathPart(rel);
};

const rewriteCssUrls = async (cssText, pageUrl) => {
  let output = cssText;
  const matches = [...cssText.matchAll(/url\((['"]?)(.*?)\1\)/g)];
  for (const match of matches) {
    const raw = match[2]?.trim();
    if (!raw || isSkippableAsset(raw)) continue;
    const fullUrl = new URL(raw, pageUrl).toString();
    const local = await downloadAsset(fullUrl);
    output = output.replace(match[0], `url("${local}")`);
  }
  return output;
};

const downloadAsset = async (assetUrl) => {
  let parsed;
  try {
    parsed = new URL(assetUrl);
  } catch {
    return assetUrl;
  }

  if (!["http:", "https:"].includes(parsed.protocol)) {
    return assetUrl;
  }

  if (assetCache.has(assetUrl)) {
    return assetCache.get(assetUrl);
  }

  const rel = assetLocalPath(assetUrl);
  const outFile = path.join(ASSETS_DIR, rel);
  await ensureDir(path.dirname(outFile));

  try {
    const response = await axios.get(assetUrl, {
      responseType: "arraybuffer",
      timeout: 30000,
      headers: { "User-Agent": USER_AGENT, Referer: parsed.origin },
      validateStatus: (s) => s >= 200 && s < 400,
    });
    const contentType = (response.headers["content-type"] || "").toLowerCase();
    const isCss = contentType.includes("text/css") || parsed.pathname.toLowerCase().endsWith(".css");

    if (isCss) {
      const cssText = Buffer.from(response.data).toString("utf8");
      const rewrittenCss = await rewriteCssUrls(cssText, assetUrl);
      await fs.writeFile(outFile, rewrittenCss, "utf8");
    } else {
      await fs.writeFile(outFile, response.data);
    }
    const webPath = `/mirror/assets/${rel.replace(/\\/g, "/")}`;
    assetCache.set(assetUrl, webPath);
    return webPath;
  } catch {
    return assetUrl;
  }
};

const removeBikeBlocks = ($) => {
  $("[id*='bike' i], [class*='bike' i]").remove();

  $("a").each((_, el) => {
    const href = ($(el).attr("href") || "").toLowerCase();
    const text = $(el).text().toLowerCase();
    if (href.includes("bike") || text.includes("bike")) {
      const navParent = $(el).closest("li, .nav-item, .menu-item");
      if (navParent.length) navParent.remove();
      else $(el).remove();
    }
  });

  $("h1, h2, h3, h4, h5, h6, p, span, strong").each((_, el) => {
    const text = ($(el).text() || "").trim().toLowerCase();
    if (!text.includes("bike")) return;

    if (text.includes("bike taxi") || text === "bike") {
      const block = $(el).closest("section, article, .row, .col, .item, .card, .dummy-col, .fcol7, li");
      if (block.length) block.remove();
      else $(el).remove();
    }
  });

  $("img").each((_, el) => {
    const hay = [
      $(el).attr("src") || "",
      $(el).attr("alt") || "",
      $(el).attr("title") || "",
      $(el).attr("class") || "",
    ]
      .join(" ")
      .toLowerCase();
    if (hay.includes("bike")) {
      const wrap = $(el).closest("section, article, .col, .card, .item, .service-box");
      if (wrap.length) wrap.remove();
      else $(el).remove();
    }
  });

  $("style").each((_, el) => {
    const css = $(el).html();
    if (!css) return;
    const cleaned = css
      .split("\n")
      .filter((line) => !line.toLowerCase().includes("bike"))
      .join("\n");
    $(el).html(cleaned);
  });
};

const removePartnerBlocks = ($) => {
  $("[class*='becom' i], [class*='partner' i], [id*='partner' i]").each((_, el) => {
    const text = ($(el).text() || "").toLowerCase();
    const href = ($(el).attr("href") || "").toLowerCase();
    if (text.includes("partner") || href.includes("partner") || $(el).find("a[href*='partner']").length) {
      $(el).remove();
    }
  });

  $("a").each((_, el) => {
    const href = ($(el).attr("href") || "").toLowerCase();
    const text = ($(el).text() || "").trim().toLowerCase();
    if (href.includes("partner") || text.includes("become a partner") || text.includes("become a parter")) {
      const block = $(el).closest(
        "li, .nav-item, .menu-item, section, article, .row, .col, .card, .trip-col, .cab-col, h1, h2, h3, h4, h5, h6"
      );
      if (block.length) block.remove();
      else $(el).remove();
    }
  });

  $("h1, h2, h3, h4, h5, h6, p, span, strong, div").each((_, el) => {
    const text = ($(el).text() || "").trim().toLowerCase();
    if (!(text.includes("become a partner") || text.includes("become a parter"))) return;

    const block = $(el).closest(
      "li, .nav-item, .menu-item, section, article, .row, .col, .card, .trip-col, .cab-col, h1, h2, h3, h4, h5, h6"
    );
    if (block.length) block.remove();
    else $(el).remove();
  });
};

const rewriteAnchors = ($) => {
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href || isSkippableAsset(href)) return;

    let targetUrl;
    try {
      targetUrl = new URL(href, BASE_ORIGIN);
    } catch {
      return;
    }

    if (targetUrl.origin !== BASE_ORIGIN) return;

    const normalizedRoute = normalizeRoute(targetUrl.pathname);
    const aliasKey = normalizedRoute.replace(/\.html$/i, "");
    const route = ROUTE_ALIASES[aliasKey] || normalizedRoute;
    if (isBikeRoute(route)) {
      $(el).remove();
      return;
    }
    const targetFile = routeToFile(route);
    $(el).attr("href", fileToWebPath(targetFile));
  });
};

const rewritePageAssets = async ($, pageUrl) => {
  const selectors = [
    ["img[src]", "src"],
    ["script[src]", "src"],
    ["source[src]", "src"],
    ["video[src]", "src"],
    ["audio[src]", "src"],
    ["iframe[src]", "src"],
    ["link[href]", "href"],
  ];

  for (const [selector, attr] of selectors) {
    const nodes = $(selector).toArray();
    for (const node of nodes) {
      const value = $(node).attr(attr);
      if (!value || isSkippableAsset(value)) continue;

      if (selector === "link[href]") {
        const rel = (($(node).attr("rel") || "") + "").toLowerCase();
        if (!["stylesheet", "icon", "preload", "prefetch", "apple-touch-icon"].some((v) => rel.includes(v))) {
          continue;
        }
      }

      const full = new URL(value, pageUrl).toString();
      const local = await downloadAsset(full);
      $(node).attr(attr, local);
    }
  }

  const styleNodes = $("style").toArray();
  for (const node of styleNodes) {
    const css = $(node).html();
    if (!css) continue;
    const rewritten = await rewriteCssUrls(css, pageUrl);
    $(node).html(rewritten);
  }

  const styledNodes = $("[style]").toArray();
  for (const node of styledNodes) {
    const raw = $(node).attr("style");
    if (!raw) continue;
    const rewritten = await rewriteCssUrls(raw, pageUrl);
    $(node).attr("style", rewritten);
  }
};

const writeAliasPages = async () => {
  for (const [aliasFile, targetPath] of Object.entries(ALIAS_PAGES)) {
    const outFile = path.join(PAGES_DIR, aliasFile);
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0; url=${targetPath}" />
  <script>window.location.replace("${targetPath}");</script>
  <title>Redirecting...</title>
</head>
<body>Redirecting...</body>
</html>`;
    await fs.writeFile(outFile, html, "utf8");
  }
};

const mirror = async () => {
  await ensureDir(PAGES_DIR);
  await ensureDir(ASSETS_DIR);

  const sitemap = await axios.get(`${BASE_ORIGIN}/sitemap.xml`, {
    headers: { "User-Agent": USER_AGENT },
    timeout: 30000,
  });

  const urls = parseLocs(sitemap.data);
  const pageUrls = urls.filter((u) => {
    try {
      const route = normalizeRoute(new URL(u).pathname);
      return !isBikeRoute(route);
    } catch {
      return false;
    }
  });

  const routeMap = {};

  for (const pageUrl of pageUrls) {
    let response;
    try {
      response = await axios.get(pageUrl, {
        headers: { "User-Agent": USER_AGENT, Referer: BASE_ORIGIN },
        timeout: 30000,
        validateStatus: (s) => s >= 200 && s < 400,
      });
    } catch {
      continue;
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });
    removeBikeBlocks($);
    removePartnerBlocks($);
    rewriteAnchors($);
    await rewritePageAssets($, pageUrl);

    $("script").each((_, el) => {
      const src = ($(el).attr("src") || "").toLowerCase();
      if (src.includes("gtag") || src.includes("analytics") || src.includes("googletagmanager")) {
        $(el).remove();
      }
    });

    $("noscript iframe").each((_, el) => {
      const src = ($(el).attr("src") || "").toLowerCase();
      if (src.includes("googletagmanager")) {
        $(el).closest("noscript").remove();
      }
    });

    const route = normalizeRoute(new URL(pageUrl).pathname);
    const filePath = routeToFile(route);
    const fullOut = path.join(PAGES_DIR, filePath);
    await ensureDir(path.dirname(fullOut));
    await fs.writeFile(fullOut, $.html(), "utf8");
    routeMap[route] = fileToWebPath(filePath);
    console.log(`Mirrored ${route}`);
  }

  await fs.writeFile(path.join(OUT_ROOT, "routes.json"), JSON.stringify(routeMap, null, 2), "utf8");
  await writeAliasPages();
  console.log(`Done. Pages mirrored: ${Object.keys(routeMap).length}`);
};

mirror().catch((err) => {
  console.error(err);
  process.exit(1);
});
