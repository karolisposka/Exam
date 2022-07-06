import React, { useState, useEffect } from "react";
import AddForm from "../components/AddForm/AddForm";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

const url = process.env.REACT_APP_BACK_API;

const Add = () => {
  const [notification, setNotification] = useState();
  const [error, setError] = useState();
  const addRecord = async (inputs) => {
    try {
      const res = await fetch(url + "v1/meds/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.msg) {
        setError("");
        return setNotification(data.msg);
      }
      if (data.err) {
        setNotification("");
        return setError(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setError();
    setNotification();
  }, []);
  return (
    <>
      <Container>
        <AddForm
          handleSubmit={(inputs) => {
            addRecord(inputs);
          }}
          error={error || notification}
        ></AddForm>
      </Container>
      <Footer />
    </>
  );
};

export default Add;
