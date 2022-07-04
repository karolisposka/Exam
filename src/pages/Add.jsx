import React, { useState } from "react";
import AddForm from "../components/AddForm/AddForm";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Notification from "../components/Notification/Notification";
import Footer from "../components/Footer/Footer";

const Add = () => {
  const [notification, setNotification] = useState();
  const [error, setError] = useState();
  const addRecord = async (inputs) => {
    try {
      const res = await fetch("http://localhost:8080/v1/meds/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.msg) {
        return setNotification(data.msg);
      }
      if (data.err) {
        return setError(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <AddForm
          handleSubmit={(inputs) => {
            addRecord(inputs);
          }}
        >
          {notification && (
            <Notification handleClick={() => setNotification("")}>
              {notification}
            </Notification>
          )}

          {error && (
            <Notification status="true" handleClick={() => setError("")}>
              {error}
            </Notification>
          )}
        </AddForm>
      </Container>
      <Footer />
    </>
  );
};

export default Add;
