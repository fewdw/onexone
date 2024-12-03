import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GymDesc from "../components/GymDesc";
import Coachs from "../components/Coachs";
import Cours from "../components/Cours";

const page = () => {
  return (
    <div>
      <Header></Header>
      <GymDesc />
      <Cours></Cours>
      <Coachs />
      <Footer></Footer>
    </div>
  );
};

export default page;
