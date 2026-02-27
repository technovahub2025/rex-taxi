import { useEffect, useRef } from "react";
import RawHtmlBlock from "../RawHtmlBlock.jsx";
import { HIDDEN_ROUTES } from "../../config/pageVisibility.js";

const html = `<header class="sp-sticky make-small">
      <div class="container cw90">
        <div class="row align-items-center justify-content-between" id="navs">
        <div class="logo"> <a href="/mirror/pages/index.html" class="header-logo d-flex" aria-label="Link">
          <img src="/mirror/assets/www.redtaxi.co.in/images/red-taxi-logo.webp" width="176" height="76" alt="Red Taxi Logo" class="hauto">
          </a>
		   <a href="/mirror/pages/index.html" class="header-logo d-flex" target="_blank" aria-label="Link"></a>
		  </div>
          <nav class="d-none d-lg-block">
            <ul class="main-menu d-flex flex-column flex-lg-row justify-content-end align-items-lg-center list-unstyled p-0 m-0" itemscope="" itemtype="http://www.schema.org/SiteNavigationElement">
               <li itemprop="name"><a class="d-block" href="/mirror/pages/index.html" itemprop="url"><span>Home</span></a></li>
               <li itemprop="name"><a class="d-block" href="/mirror/pages/about-us.html" itemprop="url"><span>About Us</span></a></li>
			   <li class="dm33" itemprop="name">
                <a href="/mirror/pages/corporate.html" class="d-block" itemprop="url">
                  <span>Corporate</span>
                </a>
                <ul class="sub-menu">
				<li class="active"><a href="/mirror/pages/corporate.html">Brand Collobration</a></li>
              <li><a href="/mirror/pages/corporate.html">Trusted Brands</a></li>
                </ul>

              </li>
            <li class="dmenu dm" itemprop="name">
                <a class="d-block" href="/mirror/pages/cities.html" itemprop="url">
                  <span>Cabs</span>
                  <i class="adown"></i>
                </a>
                <ul class="sub-menu">
				<li class="active"><a href="/mirror/pages/coimbatore-cab-booking.html" class="">Coimbatore</a></li>
        <li><a href="/mirror/pages/chennai-cab-booking.html" class="">Chennai</a></li>
        <li><a href="/mirror/pages/trichy-cab-booking.html" class="">Trichy</a></li>
        <li><a href="/mirror/pages/madurai-cab-booking.html" class="">Madurai</a></li>
        <li><a href="/mirror/pages/erode-cab-booking.html" class="">Erode</a></li>
        <li><a href="/mirror/pages/salem-cab-booking.html" class="">Salem</a></li>
        <li><a href="/mirror/pages/tirupur-cab-booking.html" class="">Tirupur</a></li>
        <li><a href="/mirror/pages/pollachi-cab-booking.html" class="">Pollachi</a></li>
        <li><a href="/mirror/pages/karur-cab-booking.html" class="">Karur</a></li>
        <li><a href="/mirror/pages/tirunelveli-cab-booking.html" class="tirunelveli">Tirunelveli</a></li>		
        <li><a href="/mirror/pages/taxi-services-in-namakkal.html" class="namakkal">Namakkal</a></li>
        <li><a href="/mirror/pages/taxi-services-in-vellore.html" class="vellore">Vellore</a></li>
		  <li><a href="/mirror/pages/taxi-services-in-hosur.html" class="vellore">Hosur</a></li> 
        <li><a href="/mirror/pages/taxi-services-in-mettupalayam.html" class="vellore">Mettupalayam</a></li> 
        <li><a href="/mirror/pages/taxi-services-in-thanjavur.html" class="vellore">Thanjavur</a></li> 
        <li><a href="/mirror/pages/taxi-services-in-dindigul.html" class="vellore">Dindigul</a></li> 
		<li><a href="/mirror/pages/taxi-services-in-villupuram.html" class="vellore">Villupuram</a></li> 
		<li><a href="/mirror/pages/taxi-services-in-puducherry.html" class="vellore">Puducherry</a></li> 
                </ul>
                <div class="megamenu cities dm1" id="mmenu1">

 <div class="menu-wrp mwidth menu-div1">
 <div class="content-div">
	 <p>Cities</p>
      <a href="/mirror/pages/cities.html"><button class="enbtn">Explore all Cities</button></a>
	</div>
    <ul class="nav tab-menu book-div1">
    <li><a href="/mirror/pages/coimbatore-cab-booking.html" class="cbe">Coimbatore</a></li>
    <li><a href="/mirror/pages/salem-cab-booking.html" class="salem">Salem</a></li>
    <li><a href="/mirror/pages/chennai-cab-booking.html" class="che">Chennai</a></li>
    <li><a href="/mirror/pages/tirupur-cab-booking.html" class="tirupur">Tirupur</a></li>
    <li><a href="/mirror/pages/trichy-cab-booking.html" class="trichy">Trichy</a></li>
    <li><a href="/mirror/pages/pollachi-cab-booking.html" class="cbe">Pollachi</a></li>
    <li><a href="/mirror/pages/madurai-cab-booking.html" class="maduraitaxi">Madurai</a></li>
    <li><a href="/mirror/pages/karur-cab-booking.html" class="Karur">Karur</a></li>
	  <li><a href="/mirror/pages/erode-cab-booking.html" class="ero">Erode</a></li>
	  <li><a href="/mirror/pages/tirunelveli-cab-booking.html" class="tirunelveli">Tirunelveli</a></li>	  
        <li><a href="/mirror/pages/taxi-services-in-namakkal.html" class="namakkal">Namakkal</a></li>
        <li><a href="/mirror/pages/taxi-services-in-vellore.html" class="vellore">Vellore</a></li>
		  <li><a href="/mirror/pages/taxi-services-in-hosur.html" class="vellore">Hosur</a></li> 
        <li><a href="/mirror/pages/taxi-services-in-mettupalayam.html" class="vellore">Mettupalayam</a></li> 
        <li><a href="/mirror/pages/taxi-services-in-thanjavur.html" class="vellore">Thanjavur</a></li> 
        <li><a href="/mirror/pages/taxi-services-in-dindigul.html" class="vellore">Dindigul</a></li> 
		<li><a href="/mirror/pages/taxi-services-in-villupuram.html" class="vellore">Villupuram</a></li> 
		<li><a href="/mirror/pages/taxi-services-in-puducherry.html" class="vellore">Puducherry</a></li> 
  	        </ul>
	<div class="mimg-d">
	   <div class="m-dimg">
	     <img src="/mirror/assets/www.redtaxi.co.in/images/cab-service-coimbatore.webp" alt="Cab Service In Coimbatore" id="oneway" loading="lazy">
	   </div>
 </div>
  <!-- Nav tabs -->


</div>
                </div></li>
				<li class="dm44" itemprop="name">
                <a class="d-block" href="/mirror/pages/booking.html" itemprop="url">
                  <span>Book a Trip</span> <i class="adown"></i>
                </a>
                <ul class="sub-menu">
                   <li class="active"><a href="/mirror/pages/oneway-trip.html" class="">Oneway Trip</a></li>
				<li><a href="/mirror/pages/round-trip.html" class="">Round Trip</a></li>
				<li><a href="/mirror/pages/hourly-rental.html" class="">Hourly Rental</a></li>
				<li><a href="/mirror/pages/bulk-booking.html" class="">Bulk Booking</a></li>
				<li><a href="/mirror/pages/airport-taxi.html" class="">Airport Taxi</a></li>
                </ul>
                   <div class="megamenu cities bookTrip dm4" id="mmenu4">
 <div class="menu-wrp mwidth  book-div">

	<div class="content-div">
	 <p>Book a Trip</p>
      <a href="/mirror/pages/book-a-trip.html"><button class="enbtn"> Explore all trips</button></a>
	</div>
    <ul class="nav tab-menu book-div">
			<li class="active"><a href="/mirror/pages/oneway-trip.html" class="oneway">Oneway Trip</a></li>
            <li><a href="/mirror/pages/round-trip.html" class="round">Round Trip</a></li>
            <li><a href="/mirror/pages/hourly-rental.html" class="hourly">Hourly Rental</a></li>
			<li><a href="/mirror/pages/bulk-booking.html" class="">Bulk Booking</a></li>
			<li><a href="/mirror/pages/airport-taxi.html" class="">Airport Taxi</a></li>
    </ul>
	<div class="mimg-d">
	   <div class="m-dimg">
	     <img src="/mirror/assets/www.redtaxi.co.in/images/cab-service-coimbatore.webp" alt="Cab Service In Coimbatore" id="oneway" width="300" height="217" class="hauto" loading="lazy">
	   </div>
	</div>
 </div>
  <!-- Nav tabs -->
</div>
                </li>
                 <li class="dm22" itemprop="name">
                <a class="d-block" href="/mirror/pages/partner.html" itemprop="url">
                  <span>Become a Partner</span>
                  <!-- <i class="adown"></i> -->
                </a>
				</li><li itemprop="name">
                <a class="d-block enbtn desknone" href="/mirror/pages/driver.html" itemprop="url">
                  <span>Become a Driver</span>
                </a>
              </li>

				<li class="mview" itemprop="name">
                <a class="d-block" href="/mirror/pages/blogs.html" itemprop="url">
                  <span>Blogs</span>
                </a>
                </li>
				<li class="mview" itemprop="name">
                <a class="d-block" href="/mirror/pages/career-apply.html" itemprop="url">
                  <span>Careers</span>
                </a>
                </li>
				 <li itemprop="name">
                <a class="d-block enbtn desknone" href="/mirror/pages/career-apply.html" itemprop="url">
                  <span>Careers</span>
                </a>
              </li>
			   <li itemprop="name">
                <a class="d-block enbtn desknone" href="/mirror/pages/contact-us.html" itemprop="url">
                  <span>Contact Us</span>
                </a>
              </li>
               <li itemprop="name">
                <a class="d-block enbtn d-btn-a d-btn " href="https://onelink.to/pu8v9g" target="_blank" itemprop="url">
                   <span>Download App</span>
                </a>
              </li>
              <!-- <li itemprop="name">
                <a class="d-block enbtn d-btn-i d-btn " href="https://apps.apple.com/in/app/red-taxi/id1128644624" target="_blank" itemprop="url">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16"><path fill="currentColor" d="M10.74 1.01s-1.08.01-2 1.03c-.92 1.01-.78 2.17-.76 2.2s1.31.08 2.13-1.1s.66-2.09.63-2.13m2.86 10.27c-.04-.08-2-1.08-1.82-2.99c.18-1.92 1.44-2.44 1.46-2.5s-.51-.69-1.08-1.01a3.1 3.1 0 0 0-1.35-.38c-.09 0-.42-.08-1.08.1c-.44.12-1.42.52-1.7.53c-.27.02-1.08-.46-1.95-.58c-.56-.11-1.15.11-1.57.29c-.42.17-1.23.66-1.79 1.96s-.27 3.35-.06 3.99s.54 1.68 1.1 2.45c.5.86 1.15 1.46 1.43 1.66c.27.2 1.05.34 1.59.06c.43-.27 1.21-.42 1.52-.41s.91.13 1.54.47c.49.17.96.1 1.42-.09c.47-.19 1.14-.93 1.93-2.41c.3-.69.44-1.06.41-1.12Z" class="iphone-icon"/></svg>
                <span>Download App</span>

                </a>
              </li> -->
            </ul>
          </nav>
          <div class="side-menu-close d-flex d-lg-none flex-wrap flex-column align-items-center justify-content-center ml-auto">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>`;

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
