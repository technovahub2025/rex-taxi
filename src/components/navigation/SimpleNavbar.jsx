import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import pageRoutes from "../../generated/pageRoutes.jsx";
import { HIDDEN_ROUTES } from "../../config/pageVisibility.js";
import NavLinks from "./NavLinks.jsx";
import { NAV_LINKS } from "./navLinks.js";

function SimpleNavbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(() => {
    const allowedPaths = new Set(pageRoutes.map((item) => item.path));
    return NAV_LINKS.filter((item) => allowedPaths.has(item.path) && !HIDDEN_ROUTES.includes(item.path));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container-fluid px-3 px-lg-4">
        <Link className="navbar-brand fw-bold text-danger" to="/">
          Red Taxi
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <NavLinks links={links} onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

export default SimpleNavbar;
