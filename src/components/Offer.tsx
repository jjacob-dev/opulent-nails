import oImage from "../images/offer.png";
import { Link } from "react-router-dom";

function Offer() {
  return (
    <>
      <div className="flex justify-center items-center py-12">
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-0 max-w-[80%] lg:flex-row">
          <div className="flex flex-col gap-3 lg:max-w-[30%]">
            <div className="text-4xl ">
              <h1>What I offer</h1>
            </div>
            <p>
              Donna Jurgens at Opulent Nails in Mount Cotton is a qualified nail
              technician providing personalised, one on one, hygienic and gentle
              high quality services.
            </p>
            <div>
              <Link to="/services">
                <button className=" py-2 px-10 outline outline-2  text-white duration-500 bg-rose-200 hover:outline-rose-200">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center order-first lg:order-last">
            <img
              className=" rounded-full w-[80%] md:w-[65%] h-auto"
              src={oImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
