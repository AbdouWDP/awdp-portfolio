import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/React.png";
import tailwind from "../../assets/tailwind.png";
import gsap from "../../assets/gsap.png";
import redux from "../../assets/redux.png";
import axios from "../../assets/axios.png";
import react_router from "../../assets/react-router-dom.png";

function Libraries() {
  return (
    <>
      <div className="library w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#77130e" }}
        >
          <div className="w-32 h-32">
            <img
              src={react_router}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>Router</p>
          </div>
        </div>
      </div>

      <div className="library w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#5C8700" }}
        >
          <div className="w-32 h-32">
            <img src={gsap} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>GSAP</p>
          </div>
        </div>
      </div>

      <div className="library w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#63439C" }}
        >
          <div className="w-32 h-32">
            <img src={axios} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>Axios</p>
          </div>
        </div>
      </div>

      <div className="library w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#422E68" }}
        >
          <div className="w-32 h-32">
            <img src={redux} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>Redux</p>
          </div>
        </div>
      </div>
      <div className="library w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#1572B6" }}
        >
          <div className="w-32 h-32">
            <img
              src={tailwind}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Libraries;
