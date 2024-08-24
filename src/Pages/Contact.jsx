import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className=" flex flex-col justify-center bg-black text-white ">
        <div className="w-full flex flex-col">
          <div className="flex  justify-between items-center">
            <div className=" w-[50%] flex flex-col h-[100vh]">
              <div className="w-[750px] text-start mt-[30px] ml-[75px] ">




                <h3 className=" text-[40px] font-bold mt-10 font-DM mb-20">
                  I am from Bangladesh, Dhaka, Narsingdi
                </h3>


                <div className="flex items-center gap-1 mb-4">
                  <h3 className=" text-[25px] font-poppins font-semibold ">Email :</h3> <p className="text-[18px] font-poppins font-medium">abdulkader.wabdeveloper@gmail.com</p>
                </div>


                <div className="flex items-center gap-2 mb-4">
                  <h3 className=" text-[25px] font-poppins font-semibold " >phone :</h3> <p className="text-[18px] font-poppins font-medium" >01970713237</p>
                </div>


                <div className="flex gap-2 items-center mb-4">

                  <h3 className=" text-[25px] font-poppins items-center font-semibold " >Social media links :</h3>

                  <ul className="flex items-center gap-5 text-[18px] font-poppins font-medium ">
                    <li >
                      <Link to="https://www.facebook.com/profile.php?id=61557884580948&mibextid=LQQJ4d">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/Kader_9595">Twitter</Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/andul-kader-b47a1517a/">
                        Linkedin
                      </Link>
                    </li>
                    <li>
                      <Link to="https://github.com/abdulkader3">GitHub</Link>
                    </li>
                  </ul>
                </div>
                <div>
  <h3 className="text-[25px] font-poppins items-center font-semibold">Map</h3>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29175.65323630484!2d90.69573061417456!3d23.926588927206232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754304ce44c5b21%3A0xce082a3c68682738!2sNarsingdi!5e0!3m2!1sen!2sbd!4v1724512430816!5m2!1sen!2sbd"
    width="600"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

              </div>
      







            </div>

            <div className="">
              {/* about me start */}
              <div className="flex items-center gap-[50px] mr-[70px] justify-end pt-10  ">
                <div className=" w-[200px] h-[3px] bg-white "></div>
                <h1 className=" text-[40px] font-roboto font-bold text-white ">
                  Contact
                </h1>
              </div>
              {/* about me start */}

              {/* about me photo start */}
              <div className="flex w-full h-[625px] items-end justify-end">
                <div className="flex items-end justify-end ">
                  <img src="photos/last.png" alt="me" />
                </div>
              </div>
              {/* about me photo start */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
