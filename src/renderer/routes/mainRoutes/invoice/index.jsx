import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateInvoice from './create';

export default function InvoiceRoutes() {
  return (
    <Routes>
      <Route path="create" element={<CreateInvoice />} />
      <Route path="view" element={<>view</>} />
    </Routes>
  );
}
