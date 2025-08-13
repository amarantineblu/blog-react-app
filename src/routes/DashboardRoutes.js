import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute';

const DashboardRoutes = () => (
  <Routes>
    {/* PrivateRoute handles auth */}
    <Route element={<PrivateRoute />}>
      {/* DashboardLayout wraps the protected dashboard page */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  </Routes>
);

export default DashboardRoutes;
