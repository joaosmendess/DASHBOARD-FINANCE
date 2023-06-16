import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoutes from './auth.routes';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;