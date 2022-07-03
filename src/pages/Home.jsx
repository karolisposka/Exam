import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";
import SwiperSlides from "../components/SwiperSlides/SwiperSlides";
import ServicesContainer from "../components/ServicesContainer/ServicesContainer";
import Hero from "../components/Hero/Heroo";

const data = [
  {
    name: "James",
    text: "cool stuff",
    rating: 4,
  },
  {
    name: "James",
    text: "cool stuff",
    rating: 3.6,
  },
  {
    name: "James",
    text: "cool stuff",
    rating: 5,
  },
  {
    name: "James",
    text: "cool stuff",
    rating: 1.5,
  },
];

const Home = () => {
  const [display, setDisplay] = useState(false);
  const myref = useRef(null);

  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
  }, [display]);

  const getData = async (inputs) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Hero
        title="Make More Care"
        subtitle="For Your Health"
        rotate={display}
        handleClick={() => {
          setDisplay(!display);
        }}
      />
      {display && (
        <>
          <ServicesContainer ref={myref} />
          <SwiperSlides data={data} />
          <Footer />
        </>
      )}
      <div ref={myref}></div>
    </>
  );
};

export default Home;
