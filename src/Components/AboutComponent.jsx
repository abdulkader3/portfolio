import React from "react";
import "./HomeCompo.css";
import "aos/dist/aos.css";

const AboutComponent = () => {

 

  


  return (
    <>
      <div className="flex flex-col md:flex-row bg-black text-white">
  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
    <h1 className="text-[30px] md:text-[40px] font-roboto font-bold">About Me</h1>
    <div className="w-[100px] md:w-[200px] h-[2px] md:h-[3px] bg-white mb-8"></div>
    <div className="overflow-hidden rounded-[10px] mt-[30px]">
      <img src="photos/Abdulkader.png" alt="me" className="w-full md:w-[600px] h-auto" />
    </div>
  </div>
  <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
    <h2 className="text-[30px] md:text-[50px] font-poppins font-medium mb-[11px]">Who am I?</h2>
    <p className="text-[16px] font-poppins mb-4">I'm a Creative Director and UI/UX Designer from Sydney, Australia...</p>
    <p className="text-[16px] font-poppins mb-4">My aim is to bring across your message...</p>
  </div>
</div>

    </>
  );
};

export default AboutComponent;
