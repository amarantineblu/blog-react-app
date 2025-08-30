// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from './AuthContext';
import 'react-quill/dist/quill.snow.css';



import "./App.css";

import DashboardRoutes from "./routes/DashboardRoutes";
import GuestRoutes from "./routes/GuestRoutes";
// import { AuthProvider } from "./AuthContext";
// import PrivateRoute from "./PrivateRoute";
// import Home from "./pages/guest/Home";

function App() {
   const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // Wait for auth to load

  console.log("Auth loading:", loading);
  console.log("User:", user);
  console.log('app.js page');
  

  return(
    <Router>
      <Routes>
        {/* Public (guest) Routes */}
          <Route path="/*" element={<GuestRoutes />}/>

        {/* Authenticated (dashboard) Routes */}
        <Route path="/dashboard/*" element={<DashboardRoutes/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
