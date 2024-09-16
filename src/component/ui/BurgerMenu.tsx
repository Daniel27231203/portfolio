import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerMenu.module.scss";
import { links } from "@/constans/link";
import Link from "next/link";
import { FaFile } from "react-icons/fa";

const BurgerMenu = () => {
  const { isOpen, setIsOpen } = useHeaderStore();

  return (
    <div
      className={isOpen ? `${scss.BurgerMenu} ${scss.active}` : scss.BurgerMenu}
    >
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((el, index) => (
              <li key={index}>
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
      </div>
    </div>
  );
};

export default BurgerMenu;
