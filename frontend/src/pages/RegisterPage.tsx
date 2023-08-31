import React, { useState } from "react";

import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";
import styles from "../styles/Form.module.css";

const LoginPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="page-title">Register</div>
      <RegisterForm />
      <div className={styles.textLine}>
        Already have an account?&nbsp;<a href="/login">Login</a>
      </div>
    </div>
  );
};
export default LoginPage;
