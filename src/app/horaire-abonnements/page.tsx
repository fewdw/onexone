"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cours from "../components/Cours";
import Horraire from "../components/Horraire";
import Abonnements from "../components/Abonnements";
import CarteDeCours from "../components/CarteDeCours";
import Horaire2 from "../components/Horaire2";

const page = () => {
  return (
    <div className="bg-black">
      <Header></Header>
      <Horaire2></Horaire2>
      <Abonnements></Abonnements>
      <CarteDeCours></CarteDeCours>
      <Footer></Footer>
    </div>
  );
};

export default page;
