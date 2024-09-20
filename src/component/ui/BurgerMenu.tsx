import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerMenu.module.scss";
import { links } from "@/constans/link";
import { Link as ScrollLink } from "react-scroll";
import { FaFile } from "react-icons/fa";

const BurgerMenu = () => {
  const { isOpen, fixScroll } = useHeaderStore();

  return (
    <div
      className={isOpen ? `${scss.BurgerMenu} ${scss.active}` : scss.BurgerMenu}
    >
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((el, index) => (
              <li key={index}>
                <ScrollLink
                  onClick={fixScroll}
                  className={scss.link}
                  to={el.to}
                  spy={el.spy}
                  smooth={el.smooth}
                  offset={-100}
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
      </div>
    </div>
  );
};

export default BurgerMenu;
