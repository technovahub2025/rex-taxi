function NavLinks({ links = [], onNavigate }) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const currentPath = window.location.pathname;
  const routePath =
    basePath && currentPath.startsWith(`${basePath}/`)
      ? currentPath.slice(basePath.length) || "/"
      : currentPath;

  const withBasePath = (path) => {
    if (!path || !path.startsWith("/") || !basePath) return path;
    if (path === "/") return `${basePath}/`;
    if (path.startsWith(`${basePath}/`) || path === basePath) return path;
    return `${basePath}${path}`;
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {links.map((item) => (
        <li className="nav-item" key={item.path}>
          <a
            href={withBasePath(item.mirrorHref || item.path)}
            onClick={onNavigate}
            className={`nav-link ${routePath === item.path ? "active fw-semibold" : ""}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
