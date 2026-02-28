import { useMemo, useState } from "react";
import usePageAssets from "../../hooks/usePageAssets.js";
import DesktopHeader from "../../components/navigation/DesktopHeader.jsx";
import MobileSideMenu from "../../components/navigation/MobileSideMenu.jsx";
import FooterTopSection from "../about-us/sections/Section05.jsx";
import FooterSection from "../about-us/sections/Section06.jsx";
import FloatingMenuSection from "../about-us/sections/Section07.jsx";

const CITIES = [
  { name: "Coimbatore", lat: 11.0168, lng: 76.9558 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Madurai", lat: 9.9252, lng: 78.1198 },
  { name: "Trichy", lat: 10.7905, lng: 78.7047 },
  { name: "Salem", lat: 11.6643, lng: 78.146 },
  { name: "Erode", lat: 11.341, lng: 77.7172 },
  { name: "Tirupur", lat: 11.1085, lng: 77.3411 },
  { name: "Karur", lat: 10.9601, lng: 78.0766 },
  { name: "Vellore", lat: 12.9165, lng: 79.1325 },
  { name: "Thanjavur", lat: 10.787, lng: 79.1378 },
  { name: "Puducherry", lat: 11.9416, lng: 79.8083 },
  { name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
];

const CARS = [
  { id: "mini", name: "Mini", baseFare: 120, perKm: 13, avgSpeedKmph: 45 },
  { id: "sedan", name: "Sedan", baseFare: 150, perKm: 15, avgSpeedKmph: 45 },
  { id: "suv", name: "SUV", baseFare: 220, perKm: 20, avgSpeedKmph: 40 },
  { id: "premium", name: "Premium Sedan", baseFare: 300, perKm: 24, avgSpeedKmph: 40 },
  { id: "traveller", name: "Traveller", baseFare: 450, perKm: 30, avgSpeedKmph: 35 },
];

const toRad = (value) => (value * Math.PI) / 180;

const haversineKm = (from, to) => {
  const earthRadiusKm = 6371;
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(from.lat)) * Math.cos(toRad(to.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthRadiusKm * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

function FareEstimatorPage() {
  const [carId, setCarId] = useState(CARS[0].id);
  const [fromCity, setFromCity] = useState(CITIES[0].name);
  const [toCity, setToCity] = useState(CITIES[1].name);

  const links = useMemo(
    () => ["/mirror/assets/www.redtaxi.co.in/style.css", "/mirror/assets/fonts.googleapis.com/css2.bb3c7be946"],
    []
  );
  const styles = useMemo(
    () => [
      `
      /* Match mirror-page desktop mega menu styling on estimator */
      .megamenu.cities,
      .megamenu.cities.bookTrip {
        right: 8%;
        padding: 30px;
        border-radius: 0 0 30px 30px;
      }
      .megamenu { background: #c71e36 !important; }
      .megamenu.cities { width: 1200px !important; }
      .megamenu.cities.bookTrip { width: 1000px !important; }
      .cities .mwidth .tab-menu,
      .cities .mwidth .tab-menu a:hover { background: transparent !important; }
      .bookTrip .menu-wrp { display: grid; grid-template-columns: 32% 21% 47%; }
      .menu-wrp { display: grid; grid-template-columns: 25% 35% 40%; }
      .book-div1 { grid-template-columns: repeat(2, 1fr); gap: 15px 10px; }
      .book-div { grid-template-columns: repeat(1, 1fr); gap: 15px 0; }
      .menu-div { display: grid; grid-template-columns: repeat(2, 1fr); }
      .mimg-d { display: flex; align-items: center; justify-content: flex-end; margin: 0 30px; }
      .m-dimg::after {
        content: "";
        position: absolute;
        background: url("/mirror/assets/www.redtaxi.co.in/images/shape.webp") bottom/395px 80px no-repeat;
        bottom: -20px;
        left: -84px;
        width: 132%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
      }
      .mwidth a,
      .sub-menu a { color: #fff !important; }
      .content-div button { color: #fff; border: 1px solid #fff; }

      @media (min-width:1300px){
        header .container.cw90{width:98% !important;}
        header #navs{flex-wrap:nowrap !important;}
        header .logo{width:fit-content !important;flex:0 0 auto;}
        header .main-menu{flex-wrap:nowrap !important;align-items:center;}
        header .main-menu>li>a{padding:0 .22vw !important;white-space:nowrap;font-size:14px !important;}
        header .main-menu .d-btn{padding:8px 12px !important;gap:4px;margin-left:6px !important;}
        .main-menu a span{font-size:14px !important;}

        /* Keep megamenu fully inside viewport on estimator page */
        .megamenu.cities{
          width:min(1230px, 96vw) !important;
          right:1% !important;
          left:auto !important;
        }
        .megamenu.cities.bookTrip{
          width:min(1000px, 96vw) !important;
          right:1% !important;
          left:auto !important;
        }
      }
      @media (min-width:1600px){
        header .container.cw90{width:94% !important;}
        header .main-menu>li>a{padding:0 .5vw !important;}
        header .main-menu .d-btn{padding:10px 18px !important;}
      }
      .fare-estimator-section { padding: 56px 0 60px; background: #f7f7f7; }
      .fare-estimator-card { background: #fff; border-radius: 18px; padding: 28px 24px; box-shadow: 0 10px 30px rgba(0,0,0,.08); }
      .fare-title { font-size: 34px; line-height: 1.2; margin: 0 0 8px; color: #131313; }
      .fare-subtitle { margin: 0 0 24px; color: #535353; }
      .fare-label { font-weight: 600; color: #131313; margin-bottom: 8px; display: block; }
      .fare-select {
        width: 100%; border: 1px solid #ddd; border-radius: 10px; min-height: 46px; padding: 0 12px;
        font-size: 15px; color: #222; background: #fff;
      }
      .fare-result {
        margin-top: 24px; border-radius: 14px; border: 1px solid #e8e8e8; background: #fff; padding: 18px;
      }
      .fare-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
      .fare-metric { background: #fafafa; border-radius: 10px; padding: 14px; border: 1px solid #eee; }
      .fare-metric h4 { margin: 0 0 4px; font-size: 14px; color: #777; }
      .fare-metric p { margin: 0; font-size: 24px; color: #c52036; font-weight: 700; }
      .fare-note { margin: 12px 0 0; color: #666; font-size: 13px; }
      @media (max-width: 900px) {
        .fare-grid { grid-template-columns: 1fr; }
        .fare-title { font-size: 28px; }
      }
    `,
    ],
    []
  );
  const scripts = useMemo(
    () => [
      { src: "/mirror/assets/cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" },
      { src: "/mirror/assets/cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js" },
      { src: "/mirror/assets/www.redtaxi.co.in/js/mscript.js" },
      { src: "/mirror/assets/www.redtaxi.co.in/js/script.js" },
      {
        inline: `
          $(document).ready(function() {
            $(window).scroll(function() {
              if ($(this).scrollTop() > 100) {
                $(".menqq:hidden").stop(true, true).fadeIn();
              } else {
                $(".menqq").stop(true, true).fadeOut();
              }
            });
          });

          $(".bklink, .trlink, .melink, .ctlink, .cablink, .crplink, .abtlink").click(function() {
            const targetClass = "." + this.className.split(" ")[0] + "2";
            $(this).toggleClass("iclose");
            $(targetClass).toggleClass("open");
          });
        `,
      },
    ],
    []
  );

  usePageAssets({
    title: "Fare Estimator - Red Taxi",
    links,
    styles,
    scripts,
    rewriteAnchors: false,
  });

  const selectedCar = CARS.find((car) => car.id === carId);
  const from = CITIES.find((city) => city.name === fromCity);
  const to = CITIES.find((city) => city.name === toCity);
  const canEstimate = from && to && selectedCar && from.name !== to.name;
  const distanceKm = canEstimate ? haversineKm(from, to) : 0;
  const travelHours = canEstimate ? distanceKm / selectedCar.avgSpeedKmph : 0;
  const estimatedPrice = canEstimate ? Math.round(selectedCar.baseFare + distanceKm * selectedCar.perKm) : 0;

  return (
    <main>
      <DesktopHeader />
      <MobileSideMenu />
      <section className="sub-bnr book-ban book-mob">
        <div className="container">
          <div className="sub-bnr-hed">
            <h1>Fare Estimator</h1>
          </div>
        </div>
        <img className="bshape" src="/mirror/assets/www.redtaxi.co.in/images/sbner-shp.webp" alt="Banner Shape" />
      </section>

      <section>
        <div className="container breadcrumb">
          <ul className="b-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li>
              <p>Fare Estimator</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="fare-estimator-section">
        <div className="container">
          <div className="fare-estimator-card">
            <h2 className="fare-title">Estimate Your Trip Fare</h2>
            <p className="fare-subtitle">Select car type and route to get approximate distance, travel time and fare.</p>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="fare-label" htmlFor="car-type">
                  Car Type
                </label>
                <select
                  id="car-type"
                  className="fare-select"
                  value={carId}
                  onChange={(event) => setCarId(event.target.value)}
                >
                  {CARS.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4">
                <label className="fare-label" htmlFor="from-city">
                  From City
                </label>
                <select
                  id="from-city"
                  className="fare-select"
                  value={fromCity}
                  onChange={(event) => setFromCity(event.target.value)}
                >
                  {CITIES.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4">
                <label className="fare-label" htmlFor="to-city">
                  To City
                </label>
                <select id="to-city" className="fare-select" value={toCity} onChange={(event) => setToCity(event.target.value)}>
                  {CITIES.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {!canEstimate ? (
              <p className="fare-note">Please select different cities for pickup and destination.</p>
            ) : (
              <div className="fare-result">
                <div className="fare-grid">
                  <div className="fare-metric">
                    <h4>Distance</h4>
                    <p>{distanceKm.toFixed(1)} km</p>
                  </div>
                  <div className="fare-metric">
                    <h4>Travel Time</h4>
                    <p>{travelHours.toFixed(1)} hr</p>
                  </div>
                  <div className="fare-metric">
                    <h4>Estimated Fare</h4>
                    <p>Rs {estimatedPrice.toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <p className="fare-note">Estimate only. Final fare may vary by route, waiting time, tolls and trip conditions.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <FooterTopSection />
      <FooterSection />
      <FloatingMenuSection />
    </main>
  );
}

export default FareEstimatorPage;
