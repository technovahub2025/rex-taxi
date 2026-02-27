import { useEffect, useRef } from "react";
import RawHtmlBlock from "../RawHtmlBlock.jsx";
import { HIDDEN_ROUTES } from "../../config/pageVisibility.js";

const html = `<div class="side-menu-wrap">
      <nav class="side-menu-nav">
        <!-- auto generated side menu from top header menu -->
		   <div class="ffsocial">
		   <p>Follow Us</p>
<ul class="socials_links sicons">
   <li><a href="https://www.facebook.com/redtaxi.ind" class="fbicon" target="_blank" aria-label="Link"></a></li>
   <li><a href="https://www.instagram.com/redtaxicabs/" class="instaicon" target="_blank" aria-label="Link"></a></li>
   <li><a href="https://twitter.com/REDTaxiInd" class="twiticon" target="_blank" aria-label="Link"></a></li>
   <li><a href="https://whatsapp.com/channel/0029VbBsNetJ3juxYOQxoJ3p" class="wpicon" target="_blank" aria-label="Link"></a></li>
</ul>
</div>
    </nav>
    </div>`;

const toRoute = (href) => {
  if (!href) return "";
  if (href.startsWith("/mirror/pages/")) {
    const slug = href.replace("/mirror/pages/", "").replace(/\.html$/, "");
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
};

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
