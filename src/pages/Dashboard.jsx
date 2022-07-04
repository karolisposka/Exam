import React, { useState, useEffect } from "react";
import MedicationsList from "../components/MedicationsList/MedicationsList";
import Container from "../components/Container/Container";
import SearchBar from "../components/SearchBar/SearchBar";
import NoData from "../components/Nodata/Nodata";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const CheckToken = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return navigate("/");
  }
};

const Dashboard = () => {
  CheckToken();
  const [records, setRecords] = useState();
  const [error, setError] = useState();

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

  const fireSearchQuery = async (input) => {
    try {
      const res = await fetch("http://localhost:8080/v1/meds/search", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(input),
      });
      const data = await res.json(input);
      if (data.err) {
        console.log(data.err);
      }
      return setRecords(data);
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

  useEffect(() => {
    getUserRecords();
  }, []);

  return (
    <>
      <Container>
        <SearchBar
          handleChange={(input) => {
            !input ? getUserRecords() : fireSearchQuery({ input: input });
          }}
        />
        {error && <NoData text={error} />}
        {records && (
          <MedicationsList
            data={records}
            handleClick={(e) => {
              deleteMeds(e.currentTarget.id);
            }}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
