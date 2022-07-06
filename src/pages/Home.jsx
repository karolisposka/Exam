import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";
import SwiperSlides from "../components/SwiperSlides/SwiperSlides";
import ServicesContainer from "../components/ServicesContainer/ServicesContainer";
import Hero from "../components/Hero/Heroo";

const url = process.env.REACT_APP_BACK_API;

const Home = () => {
  const [reviews, setReviews] = useState();
  const [error, setError] = useState();
  const [display, setDisplay] = useState(false);
  const myref = useRef(null);

  const getData = async () => {
    try {
      const res = await fetch(url + "v1/reviews/ratings");
      const data = await res.json();
      if (data.err) {
        return setError(data.err);
      }
      return setReviews(data);
    } catch (err) {
      setError("server issue");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
  }, [display]);

  return (
    <>
      <Hero
        title="Make More Care"
        subtitle="For Your Health"
        handleClick={() => {
          setDisplay(!display);
        }}
      />
      {display && (
        <>
          <ServicesContainer />
          {reviews && <SwiperSlides data={reviews} />}
          <Footer />
        </>
      )}
      <div ref={myref}></div>
    </>
  );
};

export default Home;
