import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { DashboardLayout } from './components/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Clients } from './pages/dashboard/Clients';
import { Vehicles } from './pages/dashboard/Vehicles';
import { ServiceOrders } from './pages/dashboard/ServiceOrders';
import { Settings } from './pages/dashboard/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="clients" element={<Clients />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="service-orders" element={<ServiceOrders />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;