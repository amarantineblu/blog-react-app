import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from './LoginPage';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout.js'
import Dashboard from '../pages/dashboard/Dashboard';

// import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from '../PrivateRoute.js';

const DashboardRoutes = () => (
  // <Routes>
  //   {/* <Route path="/" element={<LoginPage />} /> */}
  //   <Route path="/dashboard/*"  element={<PrivateRoute>  <Dashboard /> </PrivateRoute>}
  //   />
  // </Routes>
  <Routes>
      <Route element={<DashboardLayout />}>
      <Route path="/dashboard/*" element={<PrivateRoute> <DashboardLayout /> </PrivateRoute>}>
        <Route index element={<Dashboard/>} />
      </Route>
      </Route>
    </Routes>
);

export default DashboardRoutes;