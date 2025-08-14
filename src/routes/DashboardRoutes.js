import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute';

// const DashboardRoutes = () => {
//   console.log("DashboardLayout rendering");

//   return (
//     <Routes>
//     {/* PrivateRoute handles auth */}
//     <Route element={<PrivateRoute />}>
//       {/* DashboardLayout wraps the protected dashboard page */}
//       <Route element={<DashboardLayout />}>
//         <Route index element={<Dashboard />} />

//         {/* <Route path="/dashboard/" element={<Dashboard />} /> */}
//       </Route>
//     </Route>
//   </Routes>
//  )
// };

const DashboardRoutes = () => {
console.log("DashboardRoute rendering");
  return (
  <Routes>
    <Route element={<PrivateRoute />}>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
          {/* add more nested routes as needed */}
          <Route path="test" element={<div>Test Route</div>} />

      </Route>
    </Route>
  </Routes>
)};


export default DashboardRoutes;
