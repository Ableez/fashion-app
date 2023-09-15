import { Outlet } from "react-router-dom";
import PageInfo from "../../PageInfo";
import Navbar from "../../Shop/Navbar";

const ShopLayout = () => {
  return (
    <div>
      <PageInfo />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ShopLayout;
