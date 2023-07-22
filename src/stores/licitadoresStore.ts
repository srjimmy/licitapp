import { create } from "zustand";

import { ILicitador } from "@services/licitapp/interfaces";

interface LicitadoresStore {
  licitadores: ILicitador[];
  setLicitador: (index: number, nombre: string, oferta: number) => void;
  addLicitador: () => void;
  rmLicitador: () => void;
  resetLicitador: () => void;
}

const initialLicitador: ILicitador = {
  nombre: "",
  oferta: NaN,
  temeraria: false,
};

const useLicitadoresStore = create<LicitadoresStore>((set) => ({
  licitadores: [initialLicitador],
  setLicitador: (index, nombre, oferta) =>
    set((state) => {
      const updatedLicitadores = state.licitadores.map((licitador, i) =>
        i === index ? { ...licitador, nombre, oferta } : licitador
      );
      return {
        licitadores: updatedLicitadores,
      };
    }),
  addLicitador: () =>
    set((state) => ({
      licitadores: [...state.licitadores, { ...initialLicitador }],
    })),
  rmLicitador: () =>
    set((state) => {
      if (state.licitadores.length > 1) {
        return {
          licitadores: state.licitadores.slice(0, -1),
        };
      }
      return state;
    }),
  resetLicitador: () =>
    set(() => ({
      licitadores: [initialLicitador],
    })),
}));

export default useLicitadoresStore;
