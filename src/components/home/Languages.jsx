import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/React.png";

function Languages() {
  return (
    <>
      <div className="language w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#EB6C3F" }}
        >
          <div className="w-32 h-32">
            <img src={html} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>HTML5</p>
          </div>
        </div>
      </div>

      <div className="language w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#35A8DB" }}
        >
          <div className="w-32 h-32">
            <img src={css} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>CSS3</p>
          </div>
        </div>
      </div>

      <div className="language w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#F8DA5E" }}
        >
          <div className="w-32 h-32">
            <img
              src={javascript}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>Javascript</p>
          </div>
        </div>
      </div>

      <div className="language w-1/4 max-md:w-1/2 min-sm:w-1/2 max-sm:w-3/5 aspect-square shrink-0">
        <div
          className="w-full h-4/5 flex justify-center items-center"
          style={{ backgroundColor: "#1572B6" }}
        >
          <div className="w-32 h-32">
            <img src={react} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-full h-1/5 bg-wheat">
          <div className="w-11/12 m-auto h-full flex justify-center items-center text-4xl text-main">
            <p>React</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Languages;
