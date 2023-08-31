import React, { useState } from "react";

import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import styles from "../styles/Form.module.css";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="page-title">Login</div>
      <LoginForm />
      <div className={styles.textLine}>
        Don't have an account?&nbsp;<a href="/register">Sign up</a>
      </div>
    </>
  );
};
export default LoginPage;
