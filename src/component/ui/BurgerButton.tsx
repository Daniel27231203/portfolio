import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./BurgerButton.module.scss";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const BurgerButton = () => {
  const { isOpen, setIsOpen } = useHeaderStore();

  return (
    <div className={scss.BurgerButton} onClick={() => setIsOpen(!isOpen)}>
      <div className={scss.content}>
        {!isOpen ? (
          <button onClick={() => setIsOpen(false)} className={scss.burgerBtn}>
            <IoMenu />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)} className={scss.burgerBtn}>
            <IoClose />
          </button>
        )}
      </div>
    </div>
  );
};

export default BurgerButton;
