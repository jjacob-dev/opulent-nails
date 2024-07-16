import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogo from "../images/biglogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="relative w-full h-[100px] flex justify-between items-center px-4 bg-[#ffffff] text-black z-10">
      <div className="flex justify-center items-center">
        <Link to="/">
          <img className="w-[85x] h-[85px]" src={blogo} />
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="duration-500 hover:underline decoration-rose-200 hover:decoration-2 hover:underline-offset-8">
          <Link to="/">Home</Link>
        </li>
        <li className="duration-500 hover:underline decoration-rose-200 hover:decoration-2 hover:underline-offset-8">
          <Link to="/services">Manicures & Pedicures</Link>
        </li>
        <li className="duration-500 hover:underline decoration-rose-200 hover:decoration-2 hover:underline-offset-8">
          <Link to="/enhancements">Enhancements</Link>
        </li>
        <li className="duration-500 hover:underline decoration-rose-200 hover:decoration-2 hover:underline-offset-8">
          <Link to="/about">About</Link>
        </li>
        <li className="duration-500 hover:underline decoration-rose-200 hover:decoration-2 hover:underline-offset-8">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="duration-500 hover:underline decoration-rose-200 hover:decoration-2 hover:underline-offset-8">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-rose-200 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/services">Manicures & Pedicures</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/enhancements">Enhancements</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/about">About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
