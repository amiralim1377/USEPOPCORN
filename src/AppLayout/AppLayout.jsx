import { Outlet, useLocation } from "react-router-dom";
import "./AppLayout.css";
import NavBar from "../ui/NavBar/NavBar";
function AppLayout() {
  const location = useLocation();
  return (
    <div className="wrapper">
      {location.pathname === "/" ? "" : <NavBar />}

      <Outlet />
    </div>
  );
}

export default AppLayout;
