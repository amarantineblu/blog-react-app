// import logo from './logo.svg';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import './App.css';

import DashboardRoutes from './routes/DashboardRoutes';
import GuestRoutes from './routes/GuestRoutes';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public (guest) Routes */}
        <Route path="/*" element={<GuestRoutes />} />

        {/* Authenticated (dashboard) Routes */}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
