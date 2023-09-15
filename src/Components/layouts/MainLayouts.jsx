import { Outlet } from "react-router-dom";
import NavBanner from "../NavBanner";
import NavHelper from "../NavHelper";
import Navbar from "../Navbar";

const MainLayouts = () => {
  return (
    <div className="tracking-tight">
      <NavBanner />
      <NavHelper />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
