import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
import HeroSection from "../HeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            backgroundColor: "red",
            // top: 100,
          }}
        >
          <h1>Home</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            backgroundColor: "red",
            // top: 100,
          }}
        >
          <h1>Home</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            backgroundColor: "red",
            // top: 100,
          }}
        >
          <h1>Home</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            backgroundColor: "red",
            // top: 100,
          }}
        >
          <h1>Home</h1>
        </div>
      </div> */}
    </>
  );
};

export default Home;
