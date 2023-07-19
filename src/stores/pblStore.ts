import { create } from "zustand";

interface PblStore {
  pbl: number;
  setPbl: (value: number) => void;
}

const usePblStore = create<PblStore>((set) => ({
  pbl: 0,
  setPbl: (value: number) => set({ pbl: value }),
}));

export default usePblStore;
