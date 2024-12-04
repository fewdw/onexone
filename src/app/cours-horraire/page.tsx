import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cours from "../components/Cours";
import Horraire from "../components/Horraire";

const page = () => {
  return (
    <div>
      <Header></Header>
      <Cours></Cours>
      <Horraire></Horraire>
      <Footer></Footer>
    </div>
  );
};

export default page;
