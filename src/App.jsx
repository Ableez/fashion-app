import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayouts from "./Components/layouts/MainLayouts";
import Start from "./pages/Start";
import QuickTabs from "./Components/Start/QuickTabs";

// Import Swiperjs styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Shop from "./pages/Shop";
import ShopLayout from "./Components/layouts/Shop/ShopLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route path="/" element={<Start />}>
        <Route path="/:tab" element={<QuickTabs />} />
      </Route>
      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
