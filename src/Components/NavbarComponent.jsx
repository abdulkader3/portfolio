import React from 'react'
import { MdContactPhone } from 'react-icons/md';
import { PiAddressBookLight } from 'react-icons/pi';
import { TiHomeOutline } from 'react-icons/ti';
import { FaProjectDiagram } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
    <nav className="fixed navOne top-0 w-ful right-[50px] z-50">
        <ul className="flex navTow justify-center space-x-4 py-4">
          <li onClick={() => handleScrollToSection('section1')} className="cursor-pointer">
          <Link to='#' className="text-[#fff] flex justify-center items-center border-[1px] hover:scale-95 active:scale-75 transition-all gap-1 pl-6 pr-6 pt-[9px] pb-[9px] rounded-[10px] " ><TiHomeOutline/> Home </Link>
          </li>
          <li onClick={() => handleScrollToSection('section2')} className="cursor-pointer">
          <Link to='#' className='text-[#fff] flex justify-center items-center border-[1px] hover:scale-95 active:scale-75 transition-all pl-6 gap-1 pr-6 pt-[9px] pb-[9px] rounded-[10px] '  ><PiAddressBookLight/> About </Link>
          </li>
          <li onClick={() => handleScrollToSection('section3')} className="cursor-pointer">
          <Link to='#' className='text-[#fff] flex justify-center items-center border-[1px] hover:scale-95 active:scale-75 transition-all pl-6 pr-6 gap-1 pt-[9px] pb-[9px] rounded-[10px] ' ><FaProjectDiagram/> Project </Link>
          </li>
          <li onClick={() => handleScrollToSection('section4')} className="cursor-pointer">
          <Link to='#' className='text-[#fff] flex justify-center items-center border-[1px] hover:scale-95 active:scale-75 transition-all pl-6 pr-6 gap-1 pt-[9px] pb-[9px] rounded-[10px] ' ><MdContactPhone/> Contact </Link>
          </li>
         
        </ul>
      </nav>
      
    </>
  )
}

export default NavbarComponent
