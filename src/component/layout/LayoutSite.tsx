"use client";
import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useHeaderStore } from "@/stores/useHeaderStore";
import SideBar from "./SideBar/SideBar";

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useHeaderStore();

  return (
    <>
      <div className={scss.LayoutSite}>
        <Header />
        <main
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {!isOpen ? <SideBar /> : null}

          <div className="">
            {isOpen ? <SideBar /> : null}
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutSite;
