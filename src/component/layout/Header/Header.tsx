"use client";
import scss from "./Header.module.scss";
import { links } from "@/constans/link";
import { useEffect, useRef, useState } from "react";
import BurgerButton from "@/component/ui/BurgerButton";
import BurgerMenu from "@/component/ui/BurgerMenu";
import Logo from "../../../assets/My-Logo.png";
import Image from "next/image";
import gsap from "gsap";
import { FaFile } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [logoAnimation, setLogoAnimation] = useState(false);
  const { fixScroll } = useHeaderStore();

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => window.removeEventListener("resize", changeIsMobile);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        // x: -30,
        duration: 2,
        transition: 3000,
      },
      {
        opacity: 1,
        // x: 0,
        duration: 2,
        ease: "power3.out",
        transition: 3000,
      }
    );
  }, [logoAnimation]);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onMouseOver={() => {
                  setLogoAnimation(true);
                }}
                onMouseOut={() => {
                  setLogoAnimation(false);
                }}
              >
                <Image src={Logo} alt="logo" />
                {logoAnimation || isMobile ? (
                  <h1 ref={headerRef}>ani dev</h1>
                ) : null}
              </ScrollLink>
            </div>
          </div>
          <div className={scss.right}>
            {!isMobile ? (
              <>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((el) => (
                      <li key={el.name}>
                        <ScrollLink
                          onClick={fixScroll}
                          className={scss.link}
                          to={el.to}
                          spy={el.spy}
                          smooth={el.smooth}
                          offset={el.offset}
                          duration={el.duration}
                          activeClass={scss.active}
                        >
                          {el.icon} {el.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className={scss.resume}>
                  <button>
                    <FaFile />
                    resume
                  </button>
                </div>
              </>
            ) : (
              <>
                <BurgerButton />
                <BurgerMenu />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
