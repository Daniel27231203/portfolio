"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { links } from "@/constans/link";
import { useEffect, useRef, useState } from "react";
import BurgerButton from "@/component/ui/BurgerButton";
import BurgerMenu from "@/component/ui/BurgerMenu";
import Logo from "../../../assets/My-Logo.png";
import Image from "next/image";
import gsap from "gsap";
import { FaFile } from "react-icons/fa";
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [logoAnimation, setLogoAnimation] = useState(false);

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
              <Link
                onMouseOver={() => {
                  setLogoAnimation(true);
                }}
                onMouseOut={() => {
                  setLogoAnimation(false);
                }}
                href="/"
              >
                <Image src={Logo} alt="logo" />
                {logoAnimation || isMobile ? (
                  <h1 ref={headerRef}>ani dev</h1>
                ) : null}
              </Link>
            </div>
          </div>
          <div className={scss.right}>
            {!isMobile ? (
              <>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((el) => (
                      <li key={el.name}>
                        <Link href={el.href}>
                          {el.icon} {el.name}
                        </Link>
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
