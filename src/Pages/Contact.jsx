import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-end md:flex-row bg-black text-white">
  <div className="w-full md:w-1/2 flex contactFirstDiv flex-col justify-center p-8 md:p-16">
    <h3 className=" md:text-[30px] font-bold mt-10 contactText font-DM mb-10">I am from Narsingdi,Dhaka,Bangladesh</h3>
    <div className="mb-4 md:flex md:items-center md:gap-2 contactDivH3P">
      <h3 className="text-[20px] md:text-[25px] font-poppins contactAllH3 font-semibold">Email:</h3>
      <p className="text-[16px] md:text-[18px] contactAllP font-poppins">abdulkader.wabdeveloper@gmail.com</p>
    </div>
    <div className="mb-4 md:flex md:items-center md:gap-2 contactDivH3P">
      <h3 className="text-[20px] md:text-[25px] font-poppins contactAllH3 font-semibold">Phone:</h3>
      <p className="text-[16px] md:text-[18px] font-poppins contactAllP">01970713237</p>
    </div>
    <div className="mb-4 md:flex md:items-center md:gap-2 contactDivH3P">
      <h3 className="text-[20px] md:flex md:text-[25px] font-poppins contactAllH3 font-semibold">Social media:</h3>
      <ul className="flex  md:gap-3 sosalLinkUL md:text-[17px] font-poppins contactAllP">
        <li><Link to="https://www.facebook.com/profile.php?id=61557884580948&mibextid=LQQJ4d">Facebook</Link></li>
        <li><Link to="https://x.com/Kader_9595">Twitter</Link></li>
        <li><Link to="https://www.linkedin.com/in/andul-kader-b47a1517a/">Linkedin</Link></li>
        <li><Link to="https://github.com/abdulkader3">GitHub</Link></li>
      </ul>
    </div>
    <div className="">
      <h3 className="text-[20px] md:text-[25px] font-poppins font-semibold">Map</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29175.65323630484!2d90.69573061417456!3d23.926588927206232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754304ce44c5b21%3A0xce082a3c68682738!2sNarsingdi!5e0!3m2!1sen!2sbd!4v1724512430816!5m2!1sen!2sbd"
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <div className=" md:flex  md:flex-row md:items-end md:justify-end md:w-1/2">
    <div className="w-full md:w-auto h-auto ">
      <img src="photos/last.png" alt="me" className="w-[600px] h-auto md:w-auto" />
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;
