import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/dashboad/Dashboard";
import Product from "./component/products/Product";
import Order from "./component/order/Order";
import Login from "./component/authentication page/Login";
import Register from "./component/authentication page/Register";
import ProtectedRoute from './route/ProtectedRoute';
import DashboardLayout from "./route/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard homepage with layout */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
        </Route>

        {/* These are top-level protected routes */}
        <Route path="/products" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Product />} />
        </Route>

        <Route path="/order" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
