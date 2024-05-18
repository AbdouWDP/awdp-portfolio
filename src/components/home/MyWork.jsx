import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebsiteCard from "./WebsiteCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

function MyWork() {
  gsap.registerPlugin(ScrollTrigger);
  const text = "MYWORK";

  useGSAP(() => {
    gsap.fromTo(
      ".word",
      { y: "-100vh" },
      {
        y: 0,
        stagger: 0.1,
        ease: "back.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 80%",
          end: "bottom center",
        },
      }
    );

    gsap.to(".box", {
      scale: 20,
      backgroundColor: "#EFECE6",
      duration: 10,
      ease: "circ.in",
      scrollTrigger: {
        trigger: ".text-container",
        start: "top top",
        end: "center top",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  const myWebsites = useRef(null);

  const next = () => {
    myWebsites.current.style.scrollBehavior = "smooth";
    myWebsites.current.scrollLeft += myWebsites.current.clientWidth;
  };
  const prev = () => {
    myWebsites.current.style.scrollBehavior = "smooth";
    myWebsites.current.scrollLeft -= myWebsites.current.clientWidth;
  };

  return (
    <>
      <section
        id="work"
        className="text-container w-screen h-screen overflow-hidden"
      >
        <div className="box w-full h-full flex justify-center items-center gap-8 text-9xl max-md:text-6xl max-sm:text-4xl text-wheat font-bold">
          {text.split("").map((word) => (
            <p className="word rotate-0 select-none"> {word} </p>
          ))}
        </div>
      </section>
      <section className="my-websites w-screen h-fit py-16 bg-wheat text-6xl text-main text-center overflow-hidden">
        <div
          ref={myWebsites}
          className="m-web w-11/12 flex gap-8 overflow-scroll m-auto"
        >
          <WebsiteCard />
        </div>
        <div className="scrolling-websites-buttons text-4xl flex justify-center items-center gap-2 mt-4">
          <button
            onClick={prev}
            className="prev-website-button flex justify-center items-center w-20 h-20 rounded-full border-4 border-main hover:bg-main active:bg-main hover:text-wheat duration-100"
          >
            <span>
              <IoMdArrowRoundBack />
            </span>
          </button>
          <button
            onClick={next}
            className="next-website-button flex justify-center items-center w-20 h-20 rounded-full border-4 border-main hover:bg-main active:bg-main hover:text-wheat duration-100"
          >
            <span>
              <IoMdArrowRoundForward />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default MyWork;
