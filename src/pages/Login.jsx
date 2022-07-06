import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_BACK_API;

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const login = async (inputs) => {
    try {
      const res = await fetch(url + "v1/user/login", {
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
  useEffect(() => {
    setError();
  }, []);
  return (
    <>
      <Container>
        <LoginForm
          handleSubmit={(data) => {
            login(data);
          }}
          error={error}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Login;
