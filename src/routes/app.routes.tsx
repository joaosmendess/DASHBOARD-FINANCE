import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import List from '../components/List';
import Layout from '../pages/Layout';

const AppRoutes: React.FC = () => (
  <Layout>
   <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:type" element={<List />} />
      </Routes>
      </BrowserRouter>
  </Layout>
);

export default AppRoutes;
