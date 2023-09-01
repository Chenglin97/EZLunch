import { Form, Input, Button } from "antd";
import React, { useState } from "react";

import styles from "../styles/Form.module.css";

const RegisterForm: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleRegister = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      console.log({ apiUrl });
      const response = await fetch(`${apiUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
      } else {
        setErrorMessage(
          data.message || "An error occurred during registration."
        );
      }
    } catch (error) {
      setErrorMessage("There was a problem connecting to the server.");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Form className={styles.loginForm} onFinish={handleRegister}>
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
        <Form.Item
          style={{
            minWidth: 300,
          }}
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            // {
            //   pattern: /^[a-zA-Z0-9_-]{3,16}$/,
            //   message: "Username must be 3-16 characters, and can include numbers, underscores, and hyphens.",
            // }
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          style={{
            minWidth: 300,
          }}
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            // {
            //   type: 'email',
            //   message: 'The input is not a valid email!',
            // }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          style={{
            minWidth: 300,
          }}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            // {
            //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            //   message: "Password must be 8 characters long and contain one uppercase, one lowercase, one number, and one special character.",
            // }
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            disabled={isLoading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default RegisterForm;
