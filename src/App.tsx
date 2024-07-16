import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Tsection from "./components/Tsection";
import Iflex from "./components/Iflex";
import Testslider from "./components/Testslider";
import Location from "./components/Location";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <div className="flex justify-center">
        <hr className="w-[80%] md:w-[65%]"></hr>
      </div>
      <Testslider />
      <Tsection />
      <Iflex />
      <Location />
    </>
  );
}

export default App;
