import { Navigate, Route, Routes } from "react-router-dom";
import pageRoutes from "./generated/pageRoutes.jsx";
import { HIDDEN_ROUTES } from "./config/pageVisibility.js";
import SimpleNavbar from "./components/navigation/SimpleNavbar.jsx";

function App() {
  const visibleRoutes = pageRoutes.filter((item) => !HIDDEN_ROUTES.includes(item.path));
  const fallbackRoute = visibleRoutes.find((item) => item.path === "/")?.path || visibleRoutes[0]?.path || "/";

  return (
    <>
      <SimpleNavbar />
      <Routes>
        {visibleRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={fallbackRoute} replace />} />
      </Routes>
    </>
  );
}

export default App;
