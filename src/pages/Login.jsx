import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const login = async (inputs) => {
    try {
      const res = await fetch("http://localhost:8080/v1/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      if (data.token) {
        localStorage.setItem("token", data.token);
        return navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LoginForm
      handleSubmit={(data) => {
        login(data);
      }}
      error={error}
    />
  );
};

export default Login;
