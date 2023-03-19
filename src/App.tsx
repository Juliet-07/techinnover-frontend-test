import React from "react";
import Navbar from "./components/Navbar";
import People from "./assets/careerPeople.png";
import Stats from "./assets/frame.png";
import Background from "./assets/statsBackground.png";

const App = () => {
  return (
    <>
      <Navbar />
      {/* innovative plan */}
      <div className="h-[50vh] text-white">
        <div>innovative plan support</div>
        <div>picture woman</div>
        <div>Davido</div>
      </div>
      {/* career */}
      <div className="h-[786px] bg-white flex justify-around items-center">
        <div>
          <img src={People} alt="People" />
        </div>
        <div className="w-[595px] text-black">
          <h1 className="uppercase font-bold text-5xl mb-4">
            your career is in your hands
          </h1>
          <p className="text-xl font-normal">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
            <br />
            <br />
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced
            <br />
            <br />
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
            <br />
            <br />
          </p>
          <p>
            Try it now <span>arrow here</span>
          </p>
        </div>
      </div>
      {/* stats */}
      <div className="h-[786px] flex items-center relative">
        <div className="w-[694px] h-full bg-[url('./assets/statsBackground.png')] bg-cover bg-center flex items-center justify-center">
          <div className=" w-[570px]">
            <h1 className="font-bold text-5xl mb-4">USE YOUR STATS TO MAKE MOVES</h1>
            <p className="text-xl font-normal">
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced with the Webflow
              template.
              <br />
              <br />
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced
              <br />
              <br />
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced with the Webflow
              template.
              <br />
              <br />
            </p>
            <p>
              Try it now <span>arrow here</span>
            </p>
          </div>
        </div>
        <div className="relative pt-32 p-20 bg-black h-full">
          <div className="w-[558px] h-[512px] bg-[#1A1D1F] absolute left-24 top-24 flex items-center justify-center">
            <img src={Stats} />
          </div>
          <div className="w-[558px] h-[504px] bg-[#e1f16b] "></div>
        </div>
      </div>
    </>
  );
};

export default App;
