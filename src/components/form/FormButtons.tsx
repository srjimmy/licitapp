import { Box, Button } from "@mui/material";

import usePblStore from "@stores/pblStore";
import useLicitadoresStore from "@stores/licitadoresStore";
import useResultadosStore from "@stores/resultadosStore";

export default function FormButtons() {
  const pbl = usePblStore((state) => state.pbl);
  const resetPbl = usePblStore((state) => state.resetPbl);

  const licitadores = useLicitadoresStore((state) => state.licitadores);
  const addLicitador = useLicitadoresStore((state) => state.addLicitador);
  const rmLicitador = useLicitadoresStore((state) => state.rmLicitador);
  const resetLicitador = useLicitadoresStore((state) => state.resetLicitador);

  const setPbl = useResultadosStore((state) => state.setPbl);
  const calcLicitacion = useResultadosStore((state) => state.calcLicitacion);

  const resetForm = () => {
    resetPbl();
    resetLicitador();
  };

  const resultados = () => {
    setPbl(pbl);
    calcLicitacion(pbl, licitadores);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
      <Button
        color="success"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={addLicitador}
      >
        Añadir
      </Button>

      <Button
        color="error"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={rmLicitador}
      >
        Quitar
      </Button>

      <Button
        color="secondary"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={resetForm}
      >
        Reset
      </Button>

      <Button
        color="primary"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={resultados}
      >
        Calcular
      </Button>
    </Box>
  );
}
