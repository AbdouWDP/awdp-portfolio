import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Languages from "./Languages";
import Libraries from "./Libraries";

function Skills() {
  const langContainer = useRef(null);
  const libContainer = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const languages = gsap.utils.toArray(".language");
    const libraries = gsap.utils.toArray(".library");

    gsap.from(".my-skills", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".my-skills",
        start: "top center",
        end: "bottom center",
      },
    });

    gsap.to(languages, {
      x: -langContainer.current.scrollWidth + langContainer.current.clientWidth,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".my-skills",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(libraries, {
      x: libContainer.current.scrollWidth - libContainer.current.clientWidth,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".my-skills",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, {});

  return (
    <>
      <section
        id="skills"
        className="my-skills w-screen h-screen overflow-hidden relative flex flex-col"
      >
        <div className="skills-title w-full text-7xl max-md:text-4xl font-bold text-wheat flex items-center justify-center gap-4">
          <div className="line w-1/4 h-1.5 bg-wheat rounded-full"></div>
          <h1>My Skills</h1>
          <div className="line w-1/4 h-1.5 bg-wheat rounded-full"></div>
        </div>
        <div className="cont flex flex-col gap-4 relative my-4">
          <div
            ref={langContainer}
            className="languages-skills w-11/12 m-auto flex gap-8 overflow-hidden"
          >
            <Languages />
          </div>

          <div
            ref={libContainer}
            className="libraries-skills w-11/12 m-auto flex gap-8 overflow-hidden"
            dir="rtl"
          >
            <Libraries />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
