import React from "react";
import react from "../../assets/React.png";
import redux from "../../assets/redux.png";
import gsapImg from "../../assets/gsap.png";
import react_router from "../../assets/react-router-dom.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hl_tl = gsap.timeline();
    hl_tl.fromTo(
      ".navbar",
      { y: "-100vh" },
      { y: 0, duration: 1, ease: "power3" }
    );
    hl_tl.fromTo(
      ".heading-text",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "circ" }
    );
    hl_tl.fromTo(
      ".intro-desc",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "circ.inOut" }
    );
    hl_tl.fromTo(
      ".hero-section-button",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "circ" }
    );
    hl_tl.fromTo(
      ".languages , .libraries",

      { height: 0, visibility: "hidden" },
      { height: "80%", visibility: "visible", duration: 0.5, ease: "circ" }
    );
    hl_tl.fromTo(
      ".languages-icons , .libraries-icons",
      { opacity: 0 },
      { opacity: 1, delay: 0.1 }
    );
  }, {});
  return (
    <>
      <section className="hero-section w-screen relative">
        <article className="languages w-28 h-4/5 max-lg:hidden bg-wheat rounded-full absolute left-10 top-1/2  flex flex-col justify-center items-center gap-4 max-xl:gap-10">
          <div className="languages-icons w-3/4 aspect-square">
            <img src={html} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="languages-icons w-3/4 aspect-square">
            <img src={css} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="languages-icons w-3/4 aspect-square">
            <img
              src={javascript}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="languages-icons w-3/4 aspect-square">
            <img src={react} alt="" className="w-full h-full object-contain" />
          </div>
        </article>
        <article className="libraries w-28 h-4/5 max-lg:hidden bg-wheat rounded-full absolute right-10 top-1/2  flex flex-col  justify-center items-center gap-4 max-xl:gap-10">
          <div className="libraries-icons w-3/4 aspect-square">
            <img
              src={tailwind}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="libraries-icons w-3/4 aspect-square">
            <img src={redux} alt="" className="w-full h-full" />
          </div>
          <div className="libraries-icons w-3/4 aspect-square">
            <img src={gsapImg} alt="" className="w-full h-full" />
          </div>
          <div className="libraries-icons w-3/4 aspect-square">
            <img
              src={react_router}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </article>
        <div className="w-11/12 h-full m-auto flex justify-center">
          <div className="introduction w-3/5 max-lg:w-4/5 max-md:w-11/12 h-full flex flex-col justify-center gap-8 z-50">
            <div className="heading-text text-9xl max-xl:text-8xl max-sm:text-6xl text-center font-extrabold text-wheat select-none">
              <h1>FRONTEND DEVELOPER</h1>
            </div>
            <div className="intro-desc text-sec text-xl text-center font-semibold">
              <p>
                {/* Hi my name is{" "}
                <span className="text-hover italic">Abderrahmane</span>, you can
                call me <span className="text-purple italic">AWDP</span>, I'm a
                front-end developer, by choosing me i can say you have a good
                taste, I guarantee you that you will not worry again of facing
                bad, slow and ugly website, I'll make sure to build your dream
                website that satisfy your desires. You can see my work by
                clicking this button below.{" "}
                <span className="text-wheat italic">ENJOY!</span> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                sequi iste! Vitae nihil corporis dolorem modi totam autem sunt
                odio! Dicta consequatur eos voluptas cum aliquam magnam tenetur
                delectus, hic sunt veritatis, laboriosam labore voluptatum
                ratione recusandae pariatur rem sit omnis dignissimos? Nemo ut
                hic saepe possimus ea? Veritatis, aspernatur!
              </p>
            </div>
            <div>
              <button className="hero-section-button w-full h-20 bg-hover text-black rounded-2xl text-3xl font-bold relative z-50">
                See My Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
