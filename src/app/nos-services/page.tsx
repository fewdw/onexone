import React from "react";
import Header from "../components/Header";
import NosServiceCours from "../components/NosServiceCours";

const page = () => {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <NosServiceCours />
    </main>
  );
};

export default page;
