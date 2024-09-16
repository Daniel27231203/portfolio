import { create } from "zustand";

interface IHeaderStore {
  isOpen: Boolean;

  setIsOpen: (value: boolean) => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isOpen: false,

  setIsOpen: (value) => set({ isOpen: value }),
}));
