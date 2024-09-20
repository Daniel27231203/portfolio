import Link from "next/link";
import scss from "./SideBar.module.scss";
import { SiCodewars } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className={scss.SideBar}>
      <div className={scss.content}>
        <Link target="blank" href="https://www.codewars.com/dashboard">
          <SiCodewars />
        </Link>
        <Link target="blank" href="https://github.com/Daniel27231203">
          <FaGithub />
        </Link>
        <Link target="blank" href="https://www.instagram.com/muhamedjanov_27/">
          <IoLogoInstagram />
        </Link>
        <Link
          target="blank"
          href="https://www.facebook.com/profile.php?id=100045773602828&locale=ru_RU"
        >
          <FaFacebook />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
