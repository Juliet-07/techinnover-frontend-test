import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center justify-around py-4 w-full h-20">
      <div className="uppercase text-[#E1F16B] font-bold text-xl">logo</div>
      <div className="hidden md:flex text-white font-normal text-base">
        <p className="mr-20">Features</p>
        <p>News</p>
      </div>
      <div className="hidden md:flex text-base font-medium">
        <div className="w-[91px] h-10 py-2 text-center text-[#E1F16B] border border-[#E1F16B] mr-4">
          Sign up
        </div>
        <div className="text-center w-[91px] h-10 py-2 bg-[#E1F16B] text-black">
          Log in
        </div>
      </div>
      {/* mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden text-white">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-20 w-[290px] h-[321px] ease-in-out duration-500 bg-[#1a1d1f] z-10"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-white">
          <li className="px-4 py-2">Home</li>
          <li className="px-4 py-2">Features</li>
          <li className="px-4 py-2">News</li>
        </ul>
        <div className="w-[212px] h-10 p-2 m-6 border border-[#e1f16b] text-center text-[#e1f16b] font-normal">
          Sign up
        </div>
        <div className="w-[212px] h-10 p-2 m-6 bg-[#e1f16b] text-center text-black font-normal">
          Log in
        </div>
      </div>
    </div>
  );
};

export default Navbar;
