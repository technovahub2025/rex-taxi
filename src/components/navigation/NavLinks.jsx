import { NavLink } from "react-router-dom";

function NavLinks({ links = [], onNavigate }) {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {links.map((item) => (
        <li className="nav-item" key={item.path}>
          <NavLink
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
