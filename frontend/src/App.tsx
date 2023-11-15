import React from "react";
import { Button } from "antd";
import "./App.css";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
// import { useSelector } from 'react-redux';
import ProfilePage from './pages/ProfilePage'

const App: React.FC = () => {
  // const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* {!isLoggedIn && */<Route path="/register" element={<RegisterPage />} />}
        {/* {!isLoggedIn && */<Route path="/login" element={<LoginPage />} />}
        {/* {isLoggedIn && */<Route path="/profile" element={<ProfilePage />} />}
        {/* Redirect if the route does not exist */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
