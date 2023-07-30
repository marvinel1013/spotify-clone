import { create } from "zustand";

export const useOpenMenu = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
