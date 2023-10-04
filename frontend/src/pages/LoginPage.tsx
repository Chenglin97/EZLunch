import React, { useState } from "react";

import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import styles from "../styles/Form.module.css";

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const LoginPage = () => {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  i18n.changeLanguage(lang);

  return (
    <>
      <Navbar />
      <div className="page-title">{t('Login')}</div>
      <LoginForm />
      <div className={styles.textLine}>
        {t('DontHaveAccount')}&nbsp;<a href={`/${lang}/register`}>{t('SignUp')}</a>
      </div>
    </>
  );
};

export default LoginPage;
