import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="bg-black three flex flex-col sm:flex-row items-center justify-between w-full">

        {/* Text Section */}
        <div className="flex flex-col fore justify-end items-start sm:w-full md:w-1/2 p-8 sm:p-10 md:p-16">
          <h1 className="text-white five text-[50px] text-center font-DM font-semibold ">
            Abdul Kader <br /> Front-end <br /> React Developer
          </h1>
          <div className="flex six flex-col items-center md:items-start mt-10">
            <a
              href="public/photos/resume.pdf"
              download="resume"
              className="p-[16px] seven ml-[100px] sm:p-[12px] md:p-[16px] flex gap-[10px] sm:gap-[5px] justify-center items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#f0721e] hover:text-white transition-all bg-[#fff] font-poppins py-[8px] sm:py-[10px] rounded-[50px] text-[14px] sm:text-[12px] md:text-[16px] text-center"
            >
              <FaDownload /> Download CV
            </a>
            <ul className="flex gap-5 ml-10 egiht justify-between mt-10 md:mt-20 mb-8 md:mb-16 space-x-4">
              <li>
                <Link to="https://www.facebook.com/profile.php?id=61557884580948&mibextid=LQQJ4d">
                  <FaSquareFacebook className="text-white eghtOne text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="https://x.com/Kader_9595">
                  <FaXTwitter className="text-white text-[20px] eghtOne sm:text-[25px] md:text-[30px] eghtTow lg:text-[40px] hover:scale-110 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/andul-kader-b47a1517a/">
                  <FaLinkedinIn className="text-white text-[20px] eghtOne eghtThree sm:text-[25px] md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/abdulkader3">
                  <FiGithub className="text-white text-[20px] eghtOne sm:text-[25px] eghtFour md:text-[30px] lg:text-[40px] hover:scale-110 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Text Section */}


        {/* Image Section */}
        <div className="md:flex nine md:items-end md:justify-end sm:w-full md:w-full md:h-[100vh] ">
          <img
            className=" ten  sm:w-[200px] md:w-[400px] lg:w-[700px]  h-auto"
            src="photos/shanto.png"
            alt="photos"
          />
        </div>
        {/* Image Section */}

        
      </div>
    </>
  );
};

export default HomePage;
