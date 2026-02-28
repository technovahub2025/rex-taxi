import { useEffect } from "react";
import { HIDDEN_ROUTES } from "../config/pageVisibility.js";

const ROUTE_ALIASES = {
  "/traveller": "/tempo-traveller-booking",
  "/urbania": "/urbania-van-booking",
  "/blogs": "/blog",
  "/book-a-trip": "/booking",
  "/madurai-taxi": "/madurai-cab-booking",
};

const normalizePath = (path) => {
  if (!path) return path;
  if (path !== "/" && path.endsWith("/")) return path.slice(0, -1);
  return path;
};

const resolveRouteAlias = (route) => {
  const normalized = normalizePath(route);
  if (!normalized || normalized.startsWith("/mirror/assets/")) return normalized;
  return ROUTE_ALIASES[normalized] || normalized;
};

const toRouteKey = (href) => {
  if (!href || !href.startsWith("/")) return href;
  return href.split("#")[0].split("?")[0];
};

const BLOCKED_TEXTS = ["become a partner", "become a parter"];

const normalizeToRoute = (rawHref) => {
  if (!rawHref) return rawHref;
  const href = rawHref.trim();
  if (!href) return href;

  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:")
  ) {
    return href;
  }

  if (href.startsWith("/mirror/pages/")) {
    const slug = href.replace("/mirror/pages/", "").replace(/\.html($|\?)/, "$1");
    if (slug === "index") return "/";
    return resolveRouteAlias(`/${slug}`);
  }

  if (href.startsWith("https://www.redtaxi.co.in/") || href.startsWith("http://www.redtaxi.co.in/")) {
    const url = new URL(href);
    return resolveRouteAlias(`${url.pathname}${url.search}${url.hash}`);
  }

  if (/^(https?:)?\/\//i.test(href)) {
    return href;
  }

  if (href.endsWith(".html")) {
    const slug = href.replace(/^\.?\//, "").replace(/\.html$/, "");
    return slug === "index" ? "/" : resolveRouteAlias(`/${slug}`);
  }

  if (!href.startsWith("/")) {
    return resolveRouteAlias(`/${href.replace(/^\.?\//, "")}`);
  }

  return resolveRouteAlias(href);
};

const normalizeInlineScript = (inlineCode) =>
  (inlineCode || "")
    .replace(/\/mirror\/pages\/([a-zA-Z0-9/_-]+)\.html/g, "/$1")
    .replace(
      /(window\.location(?:\.href)?\s*=\s*['"])(?!https?:\/\/|\/|#)([^'"]+)(['"])/g,
      (_, p1, p2, p3) => `${p1}/${p2.replace(/^\/+/, "")}${p3}`
    )
    .replace(
      /(window\.location\.assign\(\s*['"])(?!https?:\/\/|\/|#)([^'"]+)(['"]\s*\))/g,
      (_, p1, p2, p3) => `${p1}/${p2.replace(/^\/+/, "")}${p3}`
    )
    .replace(/(['"])\/?traveller(?:\.html)?\1/g, "$1/tempo-traveller-booking$1")
    .replace(/(['"])\/?urbania(?:\.html)?\1/g, "$1/urbania-van-booking$1")
    .replace(/(['"])\/?blogs(?:\.html)?\1/g, "$1/blog$1")
    .replace(/(['"])\/?book-a-trip(?:\.html)?\1/g, "$1/booking$1")
    .replace(/(['"])\/?madurai-taxi(?:\.html)?\1/g, "$1/madurai-cab-booking$1")
    .replace(
      /window\.location(?:\.href)?\s*=\s*['"]\/thanks(?:\.php)?['"]/g,
      "window.location.href = \"/mirror/pages/index.html\""
    )
    .replace(
      /window\.location\.assign\(\s*['"]\/thanks(?:\.php)?['"]\s*\)/g,
      "window.location.assign(\\\"/mirror/pages/index.html\\\")"
    )
    .replace(
      /window\.location\.replace\(\s*['"]\/thanks(?:\.php)?['"]\s*\)/g,
      "window.location.replace(\\\"/mirror/pages/index.html\\\")"
    )
    .replace(
      /alert\(([^)]*Thank you for contacting us\.[\s\S]*?Our team will contact you soon[^)]*)\);?/g,
      'window.__showMirrorSuccessPopup("Thank you for contacting us.","Our team will contact you soon");'
    );

function usePageAssets({ title, links = [], styles = [], scripts = [] }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = title;
    }

    const added = [];

    links.forEach((href) => {
      if (!href) return;
      const existing = document.head.querySelector(`link[data-mirror-link="${href}"]`);
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

    if (!window.__showMirrorSuccessPopup) {
      const popupStyle = document.createElement("style");
      popupStyle.setAttribute("data-mirror-popup-style", "1");
      popupStyle.textContent = `
        .mirror-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          z-index: 99999;
          padding: 16px;
        }
        .mirror-popup-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        .mirror-popup-card {
          width: min(460px, 92vw);
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          padding: 24px 20px 18px;
          border-top: 5px solid #c52038;
          text-align: center;
          font-family: "Plus Jakarta Sans", sans-serif;
        }
        .mirror-popup-title {
          margin: 0 0 8px;
          font-size: 28px;
          line-height: 1.2;
          color: #151515;
          font-weight: 700;
        }
        .mirror-popup-subtitle {
          margin: 0 0 18px;
          font-size: 19px;
          line-height: 1.35;
          color: #c52038;
          font-weight: 600;
        }
        .mirror-popup-btn {
          border: 0;
          border-radius: 999px;
          background: #111;
          color: #fff;
          min-width: 110px;
          padding: 11px 22px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      `;
      document.head.appendChild(popupStyle);
      added.push(popupStyle);

      const popup = document.createElement("div");
      popup.className = "mirror-popup-overlay";
      popup.innerHTML = `
        <div class="mirror-popup-card" role="dialog" aria-modal="true" aria-label="Success Message">
          <h3 class="mirror-popup-title">Thank you for contacting us.</h3>
          <p class="mirror-popup-subtitle">Our team will contact you soon</p>
          <button type="button" class="mirror-popup-btn">OK</button>
        </div>
      `;
      document.body.appendChild(popup);
      added.push(popup);

      const titleEl = popup.querySelector(".mirror-popup-title");
      const subtitleEl = popup.querySelector(".mirror-popup-subtitle");
      const close = () => popup.classList.remove("open");
      popup.querySelector(".mirror-popup-btn")?.addEventListener("click", close);
      popup.addEventListener("click", (e) => {
        if (e.target === popup) close();
      });

      window.__showMirrorSuccessPopup = (title, subtitle) => {
        if (titleEl) titleEl.textContent = title || "Thank you for contacting us.";
        if (subtitleEl) subtitleEl.textContent = subtitle || "Our team will contact you soon";
        popup.classList.add("open");
      };
    }

    document.querySelectorAll("a[href]").forEach((anchor) => {
      const href = anchor.getAttribute("href");
      const normalized = normalizeToRoute(href);
      if (normalized && normalized !== href) {
        anchor.setAttribute("href", normalized);
      }

      const routeKey = toRouteKey(normalized || href);
      if (routeKey && HIDDEN_ROUTES.includes(routeKey)) {
        const wrapper = anchor.closest("li, .menu-item, .nav-item, .cab-col, .trip-col, .card");
        if (wrapper) {
          wrapper.remove();
        } else {
          anchor.remove();
        }
      }
    });

    document.querySelectorAll("a, button, span, h1, h2, h3, h4, h5, h6, p, div").forEach((el) => {
      const text = (el.textContent || "").trim().toLowerCase();
      if (!BLOCKED_TEXTS.some((v) => text === v || text.includes(v))) return;

      const wrapper = el.closest("li, .menu-item, .nav-item, .cab-col, .trip-col, .card, h1, h2, h3, h4, h5, h6");
      if (wrapper) {
        wrapper.remove();
      } else {
        el.remove();
      }
    });

    scripts.forEach((scriptDef, idx) => {
      if (!scriptDef) return;
      const script = document.createElement("script");
      script.setAttribute("data-mirror-script", String(idx));
      if (scriptDef.src) {
        script.src = normalizeToRoute(scriptDef.src);
        script.async = false;
      } else if (scriptDef.inline) {
        script.text = normalizeInlineScript(scriptDef.inline);
      }
      document.body.appendChild(script);
      added.push(script);
    });

    return () => {
      added.forEach((node) => node.remove());
      delete window.__showMirrorSuccessPopup;
      document.title = previousTitle;
    };
  }, [title, links, styles, scripts]);
}

export default usePageAssets;
