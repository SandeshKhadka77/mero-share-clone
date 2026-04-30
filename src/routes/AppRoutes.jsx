import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import MyDetails from "../pages/MyDetails";
import Portfolio from "../pages/Portfolio";
import Shares from "../pages/MyShares";
import TransactionHistory from "../pages/TransactionHistory";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/details" element={<MyDetails />} />
      <Route path="/shares" element={<Shares />} />
      <Route path="/dashboard/transactions" element={<TransactionHistory />} />
      <Route path="/dashboard/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default AppRoutes;
