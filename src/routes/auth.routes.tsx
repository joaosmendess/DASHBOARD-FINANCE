import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { } from 'react-switch';

import SignIn from '../components/Signin';

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
  </Routes>
);

export default AuthRoutes