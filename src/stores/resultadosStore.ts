import { create } from "zustand";

import { ILicitador } from "@services/licitapp/interfaces";
import licitacion from "@services/licitapp/licitacion";

interface ResultadosStore {
  pbl: number;
  setPbl: (value: number) => void;
  resultadosLicitacion: ILicitador[];
  calcLicitacion: (pbl: number, licitadores: ILicitador[]) => void;
}

const useResultadosStore = create<ResultadosStore>((set) => ({
  pbl: NaN,
  setPbl: (value) => set({ pbl: value }),
  resultadosLicitacion: [],
  calcLicitacion: (pbl, licitadores) =>
    set(() => ({
      resultadosLicitacion: licitacion(pbl, licitadores),
    })),
}));

export default useResultadosStore;
