import { Routes, Route } from 'react-router-dom';
import CreateCustomer from './create';

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="create" element={<CreateCustomer />} />
      <Route path="view" element={<>view</>} />
    </Routes>
  );
}
