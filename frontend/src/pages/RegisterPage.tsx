import React, { useState } from "react";

import RegisterForm from "../components/RegisterForm";

const LoginPage: React.FC = () => {
  return (
    <div>
      <div className="page-title">Register</div>
      <RegisterForm />
    </div>
  );
};
export default LoginPage;
