import { create } from "zustand";

interface IHeaderStore {
  isOpen: boolean;

  setIsOpen: (value: boolean) => void;

  fixScroll: () => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isOpen: false,

  setIsOpen: (value) => set({ isOpen: value }),
  fixScroll: () => {
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 100);
  },
}));
