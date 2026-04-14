import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const appRootPath = `${basePath}/`;
const fareEstimatorPath = `${basePath}/fare-estimator`;

if (window.location.pathname === basePath || window.location.pathname === appRootPath) {
  window.location.replace(`${basePath}/mirror/pages/index.html`);
}
if (window.location.pathname === fareEstimatorPath || window.location.pathname === `${fareEstimatorPath}/`) {
  window.location.replace(`${basePath}/mirror/pages/fare-estimator.html`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/test_redTaxi">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
