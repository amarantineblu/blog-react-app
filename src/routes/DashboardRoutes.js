import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Blogs from '../pages/dashboard/Blogs';
import AddBlogPage from '../pages/dashboard/AddBlogPage';
import PrivateRoute from '../PrivateRoute';



const DashboardRoutes = () => {
console.log("DashboardRoute rendering");
  return (
  <Routes>
    <Route element={<PrivateRoute />}>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="add-blog-page" element={<AddBlogPage />} />


          {/* add more nested routes as needed */}
          <Route path="test" element={<div>Test Route</div>} />

      </Route>
    </Route>
  </Routes>
)};


export default DashboardRoutes;
