import { Outlet, useLocation } from "react-router-dom";
import "./AppLayout.css";
import NavBar from "../ui/NavBar/NavBar";
function AppLayout() {
  const location = useLocation();
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage:
          location.pathname === "/"
            ? `url(https://i.postimg.cc/BnSrtHXb/s.jpg)`
            : "none",
        // filter: location.pathname === "/" ? "blur(5px)" : "",
        backgroundColor: location.pathname !== "/" ? "#e2b616" : "transparent",
      }}
    >
      {location.pathname === "/" ? "" : <NavBar />}

      <Outlet />
    </div>
  );
}

export default AppLayout;
