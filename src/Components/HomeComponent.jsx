import React from "react";
import { FaDownload } from "react-icons/fa";
import "./HomeCompo.css";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import HomePage from "./subcompo/HomePage";

const HomeComponent = () => {
  return (
    <>
      {/* main container start */}
      <div className="container one snap-y snap-mandatory overflow-y-auto h-[100vh] w-full">

        {/* Section one start */}
        <section
          id="section1"
          className="tow h-[100vh] snap-start w-full flex flex-col md:flex-row">
          <HomePage />
        </section>
        {/* section one end */}


        {/* section tow start */}
        <section id="section2" className="tow h-[100vh] snap-start">
          <About />
        </section>
        {/* section tow end */}


        {/* section three start */}
        <section id="section3" className=" three h-[100vh] snap-start">
          <Contact />
        </section>
        {/* section three end */}
         
      </div>
      {/* main container end */}
    </>
  );
};

export default HomeComponent;
