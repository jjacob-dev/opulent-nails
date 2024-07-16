import mImg from "../images/nails/nail12.jpg";
import eImg from "../images/enhance.png";
import { Link } from "react-router-dom";

function Iflex() {
  return (
    <>
      <div className="py-10">
        <div className="flex justify-center pb-5 text-2xl">
          <h1>My Services</h1>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col gap-6 justify-center items-center max-w-[65%] md:max-w-[50%] lg:flex-row">
            <div className="flex justify-center flex-col gap-2">
              <Link to="/services">
                <img className="h-auto shadow-md" src={mImg} />
                <p className="text-lg">Manicures and Pedicures</p>
              </Link>
            </div>
            <div className="flex justify-center flex-col gap-2">
              <Link to="/enhancements">
                <img className="h-auto shadow-md" src={eImg} />
                <p className="text-lg">Enhancements</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Iflex;
