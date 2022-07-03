import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const registation = async (inputs) => {
    try {
      const res = await fetch("http://localhost:8080/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!data) {
        return setError("no data");
      }
      if (data.err) {
        return setError(data.err);
      }
      if (data.msg) {
        setMessage(data.msg);
        setTimeout(() => {
          return navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* {error && (
        <Notification
          handleClick={() => {
            setError("");
          }}
        >
          {error}
        </Notification>
      )}
      {message && (
        <Notification
          handleClick={() => {
            setMessage("");
          }}
        >
          {message}
        </Notification>
      )} */}
      <RegisterForm
        handleSubmit={(data) =>
          registation({
            username: data.username,
            email: data.email,
            password: data.password,
          })
        }
      />
      <Footer />
    </>
  );
};

export default Register;
