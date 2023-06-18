import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Dashboard from "../components/Dashboard";
import List from "../components/List";

const AppRoutes: React.FC = () => (
  <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list/:type"  element={<List/>} />

      </Routes>
  </Layout>
);

export default AppRoutes;
