import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  //   const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  if (isMobile === true) {
    return (
      <div className="w-full h-[493px] bg-[#1a1d1f]">
        <div className="flex flex-col items-center justify-center text-white">
          <div>
            <h1 className="uppercase text-xl font-bold mb-4">
              short line about us
              <br />
              three words here
            </h1>
            <p className="text-xs">Short sentence here</p>
          </div>
          <h1 className="font-bold text-xl uppercase my-10">connect with us</h1>
          <div className="flex">
            <div className="mx-10 text-xs font-medium">
              <p className="flex p-2">
                Twitter
                <span className="ml-2">
                  <FiArrowUpRight />
                </span>
              </p>
              <p className="flex p-2">
                Discord
                <span className="ml-2">
                  <FiArrowUpRight />
                </span>
              </p>
              <p className="flex p-2">
                Instagram
                <span className="ml-2">
                  <FiArrowUpRight />
                </span>
              </p>
            </div>
            <div className="mx-10 text-xs font-medium">
              <p className="flex p-2">
                Cookies
                <span className="ml-2">
                  <FiArrowUpRight />
                </span>
              </p>
              <p className="flex p-2">
                Licenses
                <span className="ml-2">
                  <FiArrowUpRight />
                </span>
              </p>
              <p className="flex p-2">
                Contact
                <span className="ml-2">
                  <FiArrowUpRight />
                </span>
              </p>
            </div>
          </div>
          <div className="w-[350px] border border-[#33383f] my-4"></div>
          <div className="flex text-xs text-[#33383f] uppercase">
            <p>terms & conditions</p>
            <p>privacy policy</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full h-[305px] text-white flex flex-col px-10 py-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <h1 className="uppercase text-xl font-bold mb-4">
                short line about us
                <br />
                three words here
              </h1>
              <p className="text-xs">Short sentence here</p>
            </div>
            <div className="flex">
              <h1 className="font-bold text-xl uppercase mx-10">
                connect
                <br />
                with
                <br />
                us
              </h1>
              <div className="mx-10 text-xs font-medium">
                <p className="flex p-2">
                  Twitter
                  <span className="ml-2">
                    <FiArrowUpRight />
                  </span>
                </p>
                <p className="flex p-2">
                  Discord
                  <span className="ml-2">
                    <FiArrowUpRight />
                  </span>
                </p>
                <p className="flex p-2">
                  Instagram
                  <span className="ml-2">
                    <FiArrowUpRight />
                  </span>
                </p>
              </div>
              <div className="mx-10 text-xs font-medium">
                <p className="flex p-2">
                  Cookies
                  <span className="ml-2">
                    <FiArrowUpRight />
                  </span>
                </p>
                <p className="flex p-2">
                  Licenses
                  <span className="ml-2">
                    <FiArrowUpRight />
                  </span>
                </p>
                <p className="flex p-2">
                  Contact
                  <span className="ml-2">
                    <FiArrowUpRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[95%] border border-white"></div>
          <div className="my-10 font-normalfont-['Integral CF']  text-[#6f767e] text-xs flex  items-center justify-evenly">
            <p>{new Date().getFullYear()}</p>
            <p>PLATFORM</p>
          </div>
        </div>
      </>
    );
  }
};

export default Footer;
