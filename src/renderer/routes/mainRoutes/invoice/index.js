import React from 'react';

import { Routes, Route } from 'react-router-dom';

export default function InvoiceRoutes() {
  return (
    <Routes>
      <Route path="create" element={<>create</>} />
      <Route path="view" element={<>view</>} />
    </Routes>
  );
}
