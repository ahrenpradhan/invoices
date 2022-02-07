import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InvoiceRoutes from './invoice';
import CustomerRoutes from './customer';
// import Dashboard from './dashboard';

export default function HeaderRoutes() {
  return (
    <Routes>
      <Route path="/" element={<>hahaha heading</>} />
      <Route path="dashboard" element={<>Dashboard</>} />
      <Route path="invoice/*" element={<InvoiceRoutes />} />
      <Route path="customer/*" element={<CustomerRoutes />} />
      <Route path="settings" element={<>settings</>} />
    </Routes>
  );
}
