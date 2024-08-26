import React, { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import "./HomeCompo.css";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";




const HomeComponent = () => {
 
  const Animation =()=>{
    useEffect(()=>{
      Aos.init();
      Aos.refresh();
    },[])
  }

  return (
    <>
     

      {/* main container start */}
      <div className="container snap-y snap-mandatory overflow-y-auto h-[100vh] w-full">
  {/* Section one start */}
  <section className="one h-[100vh] snap-start w-full flex flex-col md:flex-row">
  <div className="bg-black flex flex-col sm:flex-row items-center justify-between w-full">
  {/* Text Section */}
  <div className="flex flex-col justify-end items-start sm:w-full md:w-1/2 p-8 sm:p-10 md:p-16">
    <h1 className="text-[30px] sm:text-[20px] md:text-[35px] lg:text-[40px] font-bold text-center font-DM text-white">
      Abdul Kader <br /> Front-end <br /> React Developer
    </h1>
    <div className="flex flex-col items-center md:items-start mt-10">
      <a href="public/photos/resume.pdf" download="resume" className="p-[16px] sm:p-[12px] md:p-[16px] flex gap-[10px] sm:gap-[5px] justify-center items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#f0721e] hover:text-white transition-all bg-[#fff] font-poppins py-[8px] sm:py-[10px] rounded-[50px] text-[14px] sm:text-[12px] md:text-[16px] text-center">
        <FaDownload /> Download CV
      </a>
      <ul className="flex justify-between mt-10 md:mt-20 mb-8 md:mb-16 space-x-4">
        <li><Link to="https://www.facebook.com/profile.php?id=61557884580948&mibextid=LQQJ4d"><FaSquareFacebook className="text-white text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" /></Link></li>
        <li><Link to="https://x.com/Kader_9595"><FaXTwitter className="text-white text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" /></Link></li>
        <li><Link to="https://www.linkedin.com/in/andul-kader-b47a1517a/"><FaLinkedinIn className="text-white text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" /></Link></li>
        <li><Link to="https://github.com/abdulkader3"><FiGithub className="text-white text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" /></Link></li>
      </ul>
    </div>
  </div>
  {/* Image Section */}
  <div className="flex items-end justify-center sm:w-full md:w-1/2 p-8 sm:p-10 md:p-16">
    <img className="w-[150px] sm:w-[200px] md:w-[400px] lg:w-[700px] h-auto" src="photos/shanto.png" alt="photos" />
  </div>
</div>

  </section>
      {/* section one end */}


      {/* section tow start */}
      <section className="tow h-[100vh] snap-start" >
        <About/>
      </section>
      {/* section tow end */}



      {/* section three start */}
      <section className=" three h-[100vh] snap-start">
        <Contact/>
      </section>
      {/* section three end */}


      </div>
      {/* main container end */}



      

    </>
  );
};

export default HomeComponent;
