import React, { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Container from "../components/Container/Container";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const url = process.env.REACT_APP_BACK_API;

const Register = () => {
  const [error, setError] = useState();
  const [notification, setNotification] = useState();

  const registation = async (inputs) => {
    try {
      const res = await fetch(url + "v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      if (data.msg) {
        setNotification(data.msg);
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
        <RegisterForm
          handleSubmit={(data) =>
            registation({
              username: data.username,
              email: data.email,
              password: data.password,
            })
          }
          error={error || notification}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Register;
