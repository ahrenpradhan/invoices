import React from 'react';
import CreateCustomer from './create';
import { Routes, Route } from 'react-router-dom';

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="create" element={<CreateCustomer />} />
      <Route path="view" element={<>view</>} />
    </Routes>
  );
}
