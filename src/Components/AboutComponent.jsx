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
    <div className="overflow-hidden aboutPhoto mt-[-30px]">
      <img src="photos/Abdulkader.png" alt="me" className="w-full aboutImg md:w-[600px] h-auto" />
    </div>
  </div>
  <div className="w-full aboutSone md:w-1/2 flex flex-col justify-center p-8 md:p-16">
    <h2 className="text-[30px] aboutOne md:text-[50px] font-poppins font-medium mb-[11px]">Who am I?</h2>
    <p className="text-[16px] aboutTow mt-5  font-poppins mb-4">
      <span className="text-[20px] font-semibold  "> Passionate React Web Developer | 3 Years of Experience </span>
      <br/>
      <br/>

As a dedicated and detail-oriented React web developer with three years of experience, I bring a strong foundation in HTML, HTML5, CSS, CSS3, React, Tailwind CSS, and Redux. My proficiency extends to basic Figma and Canva, allowing me to create visually appealing and responsive web applications. A native Bangla speaker, fluent in Hindi and English, and capable of expressing myself in Arabic, I embrace diverse perspectives in my work.</p>
<br/>
<br/>
    <p className="text-[16px] aboutThree font-poppins mb-4">I don't just code for a living—it's my passion. I believe in writing code that not only functions flawlessly but also meets the highest standards of quality and performance. My commitment to perfection drives every project I undertake, ensuring that each line of code I produce is optimized for both functionality and aesthetics.</p>
  </div>
</div>

    </>
  );
};

export default AboutComponent;
