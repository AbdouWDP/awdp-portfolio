import React from "react";
import sc from "../assets/sc.png";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <header className="navbar w-screen h-32 bg-transpranet text-wheat">
      <nav className="w-11/12 h-full m-auto">
        <ol className="w-full h-full flex items-center justify-between font-semibold text-xl">
          <li className="w-1/5">
            <div className="w-20 h-20 bg-wheat flex justify-center items-center rounded-full">
              <img src={sc} alt="" className="w-20 h-20" />
            </div>
          </li>
          <li className="w-3/5 max-md:hidden">
            <nav>
              <ol className="w-full h-full flex justify-center items-center gap-10 font-bold">
                <li className="list-item hover:text-hover duration-300">
                  <a href="#">Home</a>
                </li>
                <li className="list-item hover:text-hover duration-300">
                  <a href="#skills">Skills</a>
                </li>
                <li className="list-item hover:text-hover duration-300">
                  <a href="#work">Work</a>
                </li>
                <li className="list-item hover:text-hover duration-300">
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            </nav>
          </li>
          <li className="w-1/5 flex justify-end max-md:hidden">
            <button className="get-started-button w-fit px-4 h-14 bg-wheat rounded-xl text-black duration-200 relative z-50">
              <a href="#section" className="w-full h-full">
                Get Started
              </a>
            </button>
          </li>
          <MobileNav />
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
