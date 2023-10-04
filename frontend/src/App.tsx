import React from "react";
// import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';  // Adjust this path to where your i18n.ts is located

import { Button } from "antd";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    // <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    // </I18nextProvider>
  );
};

export default App;
