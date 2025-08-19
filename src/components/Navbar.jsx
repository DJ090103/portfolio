import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center
        py-4 sm:py-5
        fixed top-0 z-40
        ${scrolled ? "bg-primary bg-opacity-95" : "bg-transparent"}
        transition-all duration-300
        backdrop-blur-md
      `}
      style={{ minHeight: "64px" }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='w-14 h-14 xs:w-16 xs:h-16 sm:w-16 sm:h-16 object-contain transition-all duration-200'
          />
          <p className='text-white text-[16px] xs:text-[18px] font-bold cursor-pointer flex'>
            &nbsp;
            <span className='sm:block hidden'> HOME</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-6 sm:gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] sm:text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile/tablet */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-8 h-8 xs:w-9 xs:h-9 object-contain'
            />
          </button>

          <div
            className={`
              ${!toggle ? "hidden" : "flex"}
              flex-col
              p-4 xs:p-6
              black-gradient
              absolute top-[60px] xs:top-[68px] right-2 xs:right-4
              min-w-[140px] xs:min-w-[180px]
              z-40
              rounded-xl
              shadow-lg
              transition-all duration-200
            `}
          >
            <ul className='list-none flex flex-col gap-3 xs:gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[15px] xs:text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;