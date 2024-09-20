"use client";
import { Snowfall } from "react-snowfall";

import scss from "./Welcome.module.scss";
import { useState } from "react";
import { Link } from "react-scroll";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { GoReply } from "react-icons/go";
import profil from "../../../assets/profil.jpg";
import Image from "next/image";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Welcome = () => {
  const [language, setLanguage] = useState(false);
  const [swipe, setSwipe] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const abEn = {
    title: "Hello! My name is Daniel Muhamedjanov",
    textP:
      "___, and I’m a front-end developer with a strong passion for building user-friendly, visually appealing, and high-performance web applications. My goal is to integrate innovative technologies and provide an optimal user experience. I have extensive knowledge of React, TypeScript, CSS, and animations, and I am always striving for continuous professional growth and skill improvement. In my work, I focus on balancing functionality and design while adhering to the latest development standards. My projects range from dynamic web applications to creative interactive interfaces. I'm passionate about exploring new technologies and building solutions that not only work but also inspire.",
    btn: "PROJECTS",
    deviz: "my motto",
  };

  const ab = {
    title: "Привет! Меня зовут Даниэль Мухамеджанов",
    textP:
      "___Я фронтенд-разработчик с большим интересом к созданию удобных, эстетичных и высокопроизводительных веб-приложений. Моя цель — внедрять инновационные технологии и обеспечивать оптимальный пользовательский опыт. Я обладаю глубокими знаниями в React, TypeScript, CSS и анимациях, а также стремлюсь к постоянному профессиональному росту и совершенствованию навыков. В своей работе я всегда ориентируюсь на баланс между функциональностью и дизайном, при этом следуя передовым стандартам разработки. Мои проекты варьируются от динамичных веб-приложений до креативных интерактивных интерфейсов. Я увлечен изучением новых технологий и созданием решений, которые не только работают, но и вдохновляют.",
    btn: "ПРОЕКТЫ",
    deviz: "мой девиз",
  };

  const allMyInfa = language ? ab : abEn;

  return (
    <section id="home" className={swipe ? scss.Welcome : scss.close}>
      <Snowfall color="#ffff" snowflakeCount={100} />
      <div className="container">
        <div className={scss.title}>
          <h2>About me</h2>
          <div className={scss.titleBox}>
            <button
              onClick={() => setLanguage(true)}
              className={
                !language ? `${scss.left} ${scss.activeBtn}` : scss.left
              }
            >
              RU
            </button>
            <button
              onClick={() => setLanguage(false)}
              className={
                language ? `${scss.right} ${scss.activeBtn}` : scss.right
              }
            >
              EN
            </button>
          </div>
        </div>
        <div className={scss.content}>
          <div className={scss.box}>
            <div className={scss.block}>
              <div className={scss.blockTitle}>
                <h1>{allMyInfa.title}</h1>
                <Image
                  className={scss.imageClass}
                  src={profil}
                  alt="my-photo"
                />
              </div>
              <p>
                {!isShow
                  ? allMyInfa.textP.slice(0, 100)
                  : allMyInfa.textP.slice(0)}
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                  }}
                  onClick={() => {
                    setIsShow(!isShow);
                  }}
                >
                  {!isShow ? "..." : <GoReply />}
                </span>
              </p>
              <h3>
                {allMyInfa.deviz}: <span></span>
              </h3>
              <button>
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="linkBtn"
                >
                  {allMyInfa.btn}
                </Link>
              </button>
            </div>
            <Image className={scss.profilImage} src={profil} alt="my-photo" />
          </div>
          <button
            onClick={() => setSwipe(false)}
            className={scss.btnCloseAbout}
          >
            <GoChevronUp />
          </button>
        </div>
      </div>
      {swipe ? null : (
        <button
          className={scss.btnSwipe}
          onClick={() => {
            setSwipe(true);
            window.scrollTo(0, 0);
          }}
        >
          <GoChevronDown />
        </button>
      )}
    </section>
  );
};

export default Welcome;
