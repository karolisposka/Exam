import React, { useState, useEffect } from "react";
import MedicationsList from "../components/MedicationsList/MedicationsList";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Stats from "../components/Stats/Stats";
import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const CheckToken = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return navigate("/");
  }
};

const Dashboard = () => {
  CheckToken();
  const [records, setRecords] = useState();
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const getUserRecords = async () => {
    try {
      const res = await fetch("http://localhost:8080/v1/meds/get", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      return setRecords(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fireSearchQuery = async (inputs) => {
    try {
      const res = await fetch("http://localhost:8080/v1/meds/search", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMeds = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/v1/meds/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      getUserRecords();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => {
    return setShow(!show);
  };

  useEffect(() => {
    getUserRecords();
  }, []);

  return (
    <>
      <Container>
        <SearchBar
          handleChange={(values) => {
            return fireSearchQuery(values);
          }}
        />
        {error && <div>{error}</div>}
        {!records && <div>loading</div>}
        {records && (
          <MedicationsList
            data={records.data}
            display={show}
            handleClick={(e) => {
              deleteMeds(e.currentTarget.id);
            }}
            handleClick1={() => {
              toggle();
            }}
          >
            {show && (
              <Stats
                close={!show}
                handleClick={() => {
                  toggle();
                }}
              />
            )}
          </MedicationsList>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
