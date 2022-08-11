import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthRoute from '../components/AuthRoute';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import React from 'react';
import { config } from '../config/config';
import { initializeApp } from "firebase/app";

export const firebase = initializeApp(config.firebaseConfig);


const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;