import React from "react";
import "./HomeCompo.css";
import "aos/dist/aos.css";

const AboutComponent = () => {
  return (
    <>
      <div className="flex aboutOne flex-col md:flex-row bg-black text-white">
        <div className="w-full md:w-1/2 abouttow md:flex md:flex-col md:justify-center md:p-16">
          <h1 className="text-[30px] md:text-[40px] aboutthree font-roboto font-bold">
            About Me
          </h1>
          <div className="w-[100px] md:w-[200px] h-[2px] aboutfour md:h-[3px] bg-white mb-8"></div>
          <div className="overflow-hidden w-full aboutPhoto mt-[-30px] aboutfive">
            <img
              src="photos/Abdulkader.png"
              alt="me"
              className="w-full aboutsix aboutImg md:w-[600px] h-auto"
            />
          </div>
        </div>
        <div className="w-full aboutSone md:w-1/2 flex flex-col justify-center aboutsaven p-8 md:p-16">
          <h2 className="text-[30px] aboutegiht md:text-[50px] font-poppins font-medium abouteg mb-[11px]">
            Who am I?
          </h2>
          <p className="text-[16px] aboutbigtext aboutTow aboutnine mt-5  font-poppins mb-4">
            <span className="text-[20px] font-semibold aboutten  ">
              {" "}
              Passionate React Web Developer | 3 Years of Experience{" "}
            </span>
            <br />
            <br />
            <span className="">
              {" "}
              As a dedicated and detail-oriented React web developer with three
              years of experience, I bring a strong foundation in HTML, HTML5,
              CSS, CSS3, React, Tailwind CSS, and Redux. My proficiency extends
              to basic Figma and Canva, allowing me to create visually appealing
              and responsive web applications. A native Bangla speaker, fluent
              in Hindi and English, and capable of expressing myself in Arabic,
              I embrace diverse perspectives in my work.{" "}
            </span>
          </p>
          <br />
          <br />
          <p className="text-[16px] aboutbigtext aboutThree font-poppins aboutellever mb-4">
            I don't just code for a living—it's my passion. I believe in writing
            code that not only functions flawlessly but also meets the highest
            standards of quality and performance. My commitment to perfection
            drives every project I undertake, ensuring that each line of code I
            produce is optimized for both functionality and aesthetics.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
