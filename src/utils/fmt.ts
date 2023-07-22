export function fmtLocale(num: number): string {
  return num.toLocaleString("es-ES", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
}
