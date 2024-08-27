import React from 'react'
import { MdContactPhone } from 'react-icons/md';
import { PiAddressBookLight } from 'react-icons/pi';
import { TiHomeOutline } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <>
    <nav className="fixed navOne top-0 w-ful right-0 z-50">
        <ul className="flex navTow justify-center space-x-4 py-4">
          <li onClick={() => handleScrollToSection('section1')} className="cursor-pointer">
          <NavLink to='#' className={({ isActive }) => isActive ? "px-[24px] gap-[2px] flex items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] text-white transition-all bg-gradient-to-r from-[#FA5252] to-[#df9006] py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] hover:text-white bg-white  py-[10px] rounded-[10px] text-[16px] flex items-center gap-[2px] "  } ><TiHomeOutline/> Home </NavLink>
          </li>
          <li onClick={() => handleScrollToSection('section2')} className="cursor-pointer">
          <NavLink to='#' className={({ isActive }) => isActive ? "px-[24px] gap-[2px] flex items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] text-white transition-all bg-gradient-to-r from-[#FA5252] to-[#df9006] py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] hover:text-white bg-white  py-[10px] rounded-[10px] text-[16px] flex items-center gap-[2px] "  } ><PiAddressBookLight/> About </NavLink>
          </li>
          <li onClick={() => handleScrollToSection('section3')} className="cursor-pointer">
          <NavLink to='#' className={({ isActive }) => isActive ? "px-[24px] gap-[2px] flex items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] text-white transition-all bg-gradient-to-r from-[#FA5252] to-[#df9006] py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#df9006] hover:text-white bg-white  py-[10px] rounded-[10px] text-[16px] flex items-center gap-[2px] "  } ><MdContactPhone/> Contact </NavLink>
          </li>
         
        </ul>
      </nav>
      
    </>
  )
}

export default NavbarComponent
