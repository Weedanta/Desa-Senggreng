import React from "react";
import Visi from "../components/Visi";
import Misi from "../components/Misi";
import Sejarah from "../components/Sejarah";
import Hero from "../components/Hero";

const TentangContainer = () => {
  return (
    <section>
      <Hero />
      <div className="mycontainer bg-custom">
        <Visi />
        <Misi />
        <Sejarah />
      </div>
    </section>
  );
};

export default TentangContainer;
