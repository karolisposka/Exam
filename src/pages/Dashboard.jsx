import React, { useState, useEffect } from "react";
import MedicationsList from "../components/MedicationsList/MedicationsList";
import Container from "../components/Container/Container";
import SearchBar from "../components/SearchBar/SearchBar";
import NoData from "../components/Nodata/Nodata";
import Footer from "../components/Footer/Footer";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_BACK_API;

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
  const [error, setError] = useState("");
  const [inputValue, setInput] = useState();

  const getUserRecords = async () => {
    try {
      const res = await fetch(`${url}v1/meds/get`, {
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
      setRecords(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fireSearchQuery = async (input) => {
    try {
      const res = await fetch(url + "v1/meds/search", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();

      if (data.err) {
        setRecords();
        return setError(data.err);
      } else {
        setError();
        return setRecords(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMeds = async (id) => {
    try {
      const res = await fetch(url + "v1/meds/delete/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      getUserRecords();
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
          value={inputValue}
          handleChange={(input) => {
            fireSearchQuery({ input: input });
            setInput(input);
          }}
        />
        {!records && <div></div>}
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
