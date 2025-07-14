import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout/GuestLayout";
import Home from "../pages/guest/Home";

const GuestRoutes = () => {
  <Routes>
    <Route element={<GuestLayout />}>
       <Route path="/" element={<Home />} />
    </Route>
  </Routes>;
};

export default GuestRoutes;
