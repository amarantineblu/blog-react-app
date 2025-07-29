import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout/GuestLayout";
import Home from "../pages/guest/Home";
import About from "../pages/guest/About";
import Register from "../pages/guest/Register";



const GuestRoutes = () => (
  <Routes>
    <Route element={<GuestLayout />}>
      <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About/>} />
       <Route path="/register" element={<Register/>} />
      
    </Route>
  </Routes>
);

export default GuestRoutes;
