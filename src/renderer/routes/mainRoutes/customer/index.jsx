import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateCustomer from './create';
import ViewCustomer from './view';

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="create" element={<CreateCustomer />} />
      <Route path="view" element={<ViewCustomer />} />
    </Routes>
  );
}
