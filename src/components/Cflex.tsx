import Cinput from "./Cinput";
import Cdetails from "./Cdetails";

function Cflex() {
  return (
    <>
      <div className="bg-rose-50 bg-opacity-40 min-h-screen">
        <div className="flex justify-center items-center pt-12">
          <div className="flex flex-col justify-center gap-10 md:max-w-[80%] md:flex-row">
            <div className="">
              <Cdetails />
            </div>
            <div className="">
              <Cinput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cflex;
