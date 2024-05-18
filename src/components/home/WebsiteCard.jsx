import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { websiteCard } from "../home/websiteArray.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function WebsiteCard() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".m-web", {
      x: "100vw",
      opacity: 0,
      duration: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: ".website-card",
        start: "top 30%",
        end: "bottom bottom",
      },
    });
  }, {});

  return (
    <>
      {websiteCard.map((website) => {
        return (
          <div className="website-card w-2/5 max-lg:w-full max-xl:w-3/5 aspect-video max-md:aspect-square bg-main rounded-lg flex justify-center items-center shrink-0">
            <div className="w-11/12 aspect-video max-md:aspect-square flex justify-between flex-col">
              <div className="website-card-image w-full h-3/4">
                <a href={website.direct_link} className="w-full h-full">
                  <img
                    src={website.main_img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="website-technologies w-full flex gap-1 overflow-scroll my-2">
                {website.technologies.map((technology) => {
                  return (
                    <div className="py-1 px-2 bg-wheat flex items-center gap-1 text-main text-sm rounded-sm font-bold">
                      <div className="w-6 h-6">
                        <img
                          src={technology.img}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p> {technology.name} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="website-links flex justify-between items-center text-wheat text-xl ">
                <div className="font-bold hover:text-hover cursor-default duration-150">
                  <a href={website.direct_link}>
                    <p>{website.name}</p>
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="website-github-link hover:text-hover duration-150">
                    <a href={website.github_link}>
                      <span>
                        <FaGithub />
                      </span>
                    </a>
                  </div>
                  <div className="website-direct-link hover:text-hover duration-150">
                    <a href={website.direct_link}>
                      <span>
                        <FaExternalLinkAlt />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WebsiteCard;
