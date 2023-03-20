import { FiArrowRight } from "react-icons/fi";
import Navbar from "./components/Navbar";
import People from "./assets/careerPeople.png";
import Stats from "./assets/frame.png";
import Wizkid from "./assets/wizkid.png";
import Burna from "./assets/burna.png";
import Tiwa from "./assets/tiwa.png";
import Boy from "./assets/boy.png";
import Flower from "./assets/flower.png";
import Woman from "./assets/hot-woman.png";
import Davido from "./assets/davido.png";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* innovative plan */}
      <div className="h-[80vh] md:h-[70vh] text-white flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-[319px] md:w-[716px] md:ml-14">
          <h1 className="uppercase font-bold text-2xl md:text-6xl">
            an innovative platform that{" "}
            <span className="text-[#E1F16B]">supports artists.</span>
          </h1>
          <p className="w-[325px] md:w-[507px] text-sm md:text-xl my-5 md:my-10">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </p>
          <p className="text-[#E1F16B] flex items-center mb-2 md:mb-0">
            Try it now{" "}
            <span>
              <FiArrowRight className="ml-2" />
            </span>
          </p>
        </div>
        <div>
          <img
            src={Woman}
            alt="Woman"
            className="w-[350.1px] h-[443.21px] md:w-[350px] md:h-[476px] md:mr-20 md:-mb-24"
          />
        </div>
        <div className="hidden md:block">
          <img
            src={Davido}
            alt="Davido"
            className="w-[345.66px] md:w-[400px] h-[] md:h-[450px]"
          />
        </div>
      </div>
      {/* career */}
      <div className="h-[851px] md:h-[786px] bg-white flex flex-col-reverse md:flex-row justify-around items-center">
        <img src={People} alt="People" className="w-[345.66px] md:w-[554px]" />
        <div className="w-[348px] md:w-[595px] text-black">
          <h1 className="uppercase font-bold text-2xl md:text-5xl mb-4">
            your career is in your hands
          </h1>
          <p className="w-[323px] md:w-[507px] text-xs md:text-xl font-normal">
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
          <p className="flex items-center">
            Try it now{" "}
            <span>
              <FiArrowRight className="ml-2" />
            </span>
          </p>
        </div>
      </div>
      {/* stats */}
      <div className="w-full h-[786px] flex flex-col md:flex-row items-center relative">
        <div className="w-[411px] md:w-[50%] h-[404px] md:h-full bg-[url('./assets/statsBackground.png')] bg-cover bg-center flex items-center justify-center">
          <div className="w-[348px] md:w-[570px]">
            <h1 className="mt-4 md:mt-0 font-bold text-2xl md:text-5xl mb-4">
              USE YOUR STATS TO MAKE MOVES
            </h1>
            <p className="text-xs md:text-xl font-normal">
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
            <p className="flex items-center">
              Try it now{" "}
              <span>
                <FiArrowRight className="ml-2" />
              </span>
            </p>
          </div>
        </div>
        <div className="w-[414.14px] md:w-[50%] relative pt-32 p-20 bg-black h-full">
          <div className="w-[351.59px] md:w-[558px] h-[291.43px] md:h-[512px] bg-[#1A1D1F] absolute left-6 top-20 md:left-24 md:top-24 flex items-center justify-center">
            <img src={Stats} />
          </div>
          <div className="hidden md:block w-[558px] h-[504px] bg-[#e1f16b] "></div>
        </div>
      </div>
      {/* artists */}
      <div className="w-full h-[608px] bg-[url('./assets/artist.png')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t md:bg-gradient-to-l from-black to-black/30 z-[2]" />
        <div className="absolute w-[347px] md:w-[663px] z-[2]">
          <p className="font-bold text-2xl md:text-4xl uppercase text-white items-start mb-4">
            "we help artists find
            <br /> their fans"
          </p>
          <div className="md:w-[507px] text-xs md:text-xl text-[#6f767e]">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </div>
        </div>
      </div>
      {/* fanbase */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[665px] h-[118px] uppercase font-bold text-5xl  mt-20 text-white text-center">
          join top artists, build your{" "}
          <span className="text-[#E1F16B]">fanbase</span>
        </div>
        <div className="w-[507px] h-[64px] text-[#6f767e] font-normal text-center text-base">
          {" "}
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </div>
        <div className="w-full my-10">
          <div className="grid grid-cols-3">
            <div className="w-[196px] h-[196px] mx-4 relative">
              <img src={Wizkid} alt="wizkid" />
            </div>
            <div className="w-[220px] h-[220px]">
              <img src={Tiwa} alt="tiwa" className="rounded-full" />
            </div>
            <div className="w-[227px] h-[284px]">
              <img src={Flower} alt="flower" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="w-[196px] h-[196px]">
              <img src={Burna} alt="burna-boy" />
            </div>
            <div className="w-[220px] h-[220px]">
              <img src={Boy} alt="boy" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
