import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import ArticleListPage from './pages/Articles/ArticleListPage';
import ArticleDetailPage from './pages/Articles/ArticleDetailPage';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext';
import Footer from './components/Footer';
import './App.css';
import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/articles" element={
            <PrivateRoute>
              <ArticleListPage />
            </PrivateRoute>
          } />
          <Route path="/article/:postId" element={
            <PrivateRoute>
              <ArticleDetailPage />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
