import { Link } from "react-router-dom";
import heroimg from "../images/hero-image.jpg";
import blogo from "../images/biglogo.png";

const Hero = () => {
  return (
    <>
      <div
        className="flex w-full h-screen bg-no-repeat bg-cover justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroimg})`,
        }}
      >
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
            src={blogo}
          />
          <div>
            <Link to="/about">
              <button className=" py-2 px-6 md:px-8 outline outline-2  text-white duration-500 hover:bg-rose-200 hover:outline-rose-200">
                Click to know more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
