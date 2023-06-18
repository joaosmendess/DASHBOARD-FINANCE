
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const App: React.FC = () => {
  const { logged } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {logged ? (
          <Route path="/*" element={<AppRoutes />} />
        ) : (
          <Route path="/*" element={<AuthRoutes />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;