import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function Experience() {
  return (
    <>
      <section
        id="contact"
        className="contact-me w-screen h-fit pb-20 bg-wheat"
      >
        <div className="skills-title w-full text-7xl max-md:text-4xl max-sm:text-3xl font-bold text-main flex items-center justify-center gap-4">
          <div className="line w-1/4 h-1.5 bg-main rounded-full"></div>
          <h1>Contact Me</h1>
          <div className="line w-1/4 h-1.5 bg-main rounded-full"></div>
        </div>
        <div className="mail w-11/12 h-20 text-center mt-10 m-auto flex justify-between ">
          <a href="" className="w-2/5 h-full">
            <button className="w-full h-full rounded-lg bg-main text-wheat hover:bg-purple hover:text-wheat duration-200 flex justify-center items-center gap-2 text-4xl max-sm:text-3xl font-bold">
              <span>
                <IoMdMail />
              </span>
              <span>Gmail</span>
            </button>
          </a>
          <div className="divider w-0.5 rounded-full bg-main h-full"></div>
          <a
            href="https://github.com/AbdouWDP?tab=repositories"
            className="w-2/5 h-full"
          >
            <button className="w-full h-full rounded-lg bg-main text-wheat hover:bg-purple hover:text-wheat duration-200 text-4xl max-sm:text-3xl flex justify-center items-center gap-2 font-bold">
              <span>
                <FaGithub />
              </span>
              <span>Github</span>
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Experience;
