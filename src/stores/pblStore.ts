import { create } from "zustand";

interface PblStore {
  pbl: number;
  setPbl: (value: number) => void;
  resetPbl: () => void;
}

const usePblStore = create<PblStore>((set) => ({
  pbl: NaN,
  setPbl: (value) => set({ pbl: value }),
  resetPbl: () => set({ pbl: NaN }),
}));

export default usePblStore;
