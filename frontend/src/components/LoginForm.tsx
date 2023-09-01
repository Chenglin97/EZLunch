import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import { Form, Input, Button, Checkbox } from "antd";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async (values: {username: string, password: string, remember: boolean}) => {
    setIsLoading(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch("FETCH_USER_LOGIN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful login here, maybe redirecting the user or storing a token
      } else {
        setErrorMessage(data.message || "An error occurred during login.");
      }
    } catch (error) {
      setErrorMessage("There was a problem connecting to the server.");
    }
  
    setIsLoading(false);
  };
  
  return (
    <div>
      <Form
        className={styles.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              pattern: /^[a-zA-Z0-9_-]{3,16}$/,
              message: "Username must be 3-16 characters, and can include numbers, underscores, and hyphens.",
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must be 8 characters long and contain one uppercase, one lowercase, one number, and one special character.",
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
          Login
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginForm;
