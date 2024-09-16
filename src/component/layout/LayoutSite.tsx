"use client";
import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useHeaderStore } from "@/stores/useHeaderStore";

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const { setIsOpen } = useHeaderStore();

  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
