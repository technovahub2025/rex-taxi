function NavLinks({ links = [], onNavigate }) {
  const currentPath = window.location.pathname;

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {links.map((item) => (
        <li className="nav-item" key={item.path}>
          <a
            href={item.mirrorHref || item.path}
            onClick={onNavigate}
            className={`nav-link ${currentPath === item.path ? "active fw-semibold" : ""}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
