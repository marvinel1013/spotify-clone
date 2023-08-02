import { create } from "zustand";

export const usePlayData = create((set) => ({
  playData: null,
  image: null,
  setPlayData: (data) => set(() => ({ playData: data })),
  setImageData: (data) => set(() => ({ image: data })),
}));
