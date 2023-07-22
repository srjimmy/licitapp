import { ILicitador } from "@services/licitapp/interfaces";

/**
 * Calcula la media de las ofertas de los licitadores, excluyendo aquellos
 * que se encuentran en la lista de exclusiones.
 */
export function mediaOfertas(
  licitadores: ILicitador[],
  exclusiones: ILicitador[] = []
) {
  let total: number = 0;
  let contador: number = 0;

  for (let i = 0; i < licitadores.length; i++) {
    const licitador = licitadores[i];

    // Excluye al licitador si se encuentra en el array de exclusiones
    if (exclusiones.some((exc) => exc.nombre === licitador.nombre)) {
      continue;
    }

    total += licitador.oferta;
    contador++;
  }

  return total / contador;
}

/**
 * Encuentra el objeto u objetos con ofertas máximas dentro de la lista de licitadores.
 */
export function maxOfertas(licitadores: ILicitador[], cantidad: number = 1) {
  return [...licitadores]
    .sort((a, b) => b.oferta - a.oferta)
    .slice(0, cantidad);
}
