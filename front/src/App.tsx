import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Articles from './pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="articles" element={<Articles />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
