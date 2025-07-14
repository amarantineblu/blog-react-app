import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout/GuestLayout";

const GuestRoutes = () => {
  <Routes>
    <Route element={<GuestLayout />}>
      {/* <Route path="/" element={<Home/>} /> */}
    </Route>
  </Routes>;
};

export default GuestRoutes;
