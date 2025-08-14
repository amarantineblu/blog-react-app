import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout/GuestLayout";
import Home from "../pages/guest/Home";
import About from "../pages/guest/About";
import Register from "../pages/guest/Register";
import Login from "../pages/guest/Login";



const GuestRoutes = () => (
  <Routes>
    <Route element={<GuestLayout />}>
      <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login/>} />  
    </Route>
  </Routes>
);

export default GuestRoutes;
