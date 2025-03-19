"use client";
import React from "react";
import Header from "../components/Header";
import APropos from "../components/APropos";
import AproposPhotos from "../components/AproposPhotos";
import Apropostext from "../components/Apropostext";
import Coachs from "../components/Coachs";

const page = () => {
  return (
    <div className="bg-black">
      <Header />
      <APropos />
      <Apropostext />
      <Coachs />
    </div>
  );
};

export default page;
