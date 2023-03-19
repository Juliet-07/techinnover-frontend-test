import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around py-4 w-full h-20 bg-fuchsia-300">
      <div className="uppercase text-[#E1F16B] font-bold text-xl">logo</div>
      <div className="flex text-white font-normal text-base">
        <p className="mr-20">Features</p>
        <p>News</p>
      </div>
      <div className="flex text-base font-medium">
        <div className="w-[91px] h-10 py-2 text-center text-[#E1F16B] border border-[#E1F16B] mr-4">Sign up</div>
        <div className="text-center w-[91px] h-10 py-2 bg-[#E1F16B] text-black">Log in</div>
      </div>
    </div>
  );
};

export default Navbar;
