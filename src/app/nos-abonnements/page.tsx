"use client";
import React from "react";
import Header from "../components/Header";
import CarteDeCours from "../components/CarteDeCours";
import Abonnements from "../components/Abonnements";

const page = () => {
  return (
    <div className="bg-black">
      <Header />
      <Abonnements />
      <CarteDeCours />
    </div>
  );
};

export default page;
