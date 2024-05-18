import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <>
      <li
        className="mobile-navbar max-md:block hidden"
        onClick={() => setOpen(!open)}
      >
        <button
          className={`w-16 h-16 rounded-full text-main bg-wheat flex justify-center items-center text-4xl`}
        >
          <span>
            <GiHamburgerMenu />
          </span>
        </button>
      </li>
      <header
        className="absolute w-1/2 h-screen bg-wheat top-0 duration-300 ease-in z-50 max-md:block hidden"
        style={{ left: open ? 0 : "-100vh" }}
      >
        <nav className="w-full h-full text-black text-lg">
          <ol className="w-full h-4/5 flex items-center flex-col mt-4">
            <li
              className="hover:bg-main hover:text-wheat w-full py-2 text-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <a href="#">Home</a>
            </li>
            <li
              className="hover:bg-main hover:text-wheat w-full py-2 text-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className="hover:bg-main hover:text-wheat w-full py-2 text-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <a href="#work">Work</a>
            </li>
            <li
              className="hover:bg-main hover:text-wheat w-full py-2 text-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </nav>
      </header>
    </>
  );
}

export default MobileNav;
