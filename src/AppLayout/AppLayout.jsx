import { Outlet } from "react-router-dom";
import "./AppLayout.css";
function AppLayout() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default AppLayout;
