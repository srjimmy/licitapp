import { Box, Button } from "@mui/material";
import { Add, Remove, Print, RestartAlt, PlayArrow } from "@mui/icons-material";

import usePblStore from "@stores/pblStore";
import useLicitadoresStore from "@stores/licitadoresStore";

export default function FormButtons() {
  const addLicitador = useLicitadoresStore((state) => state.addLicitador);
  const rmLicitador = useLicitadoresStore((state) => state.rmLicitador);

  const resetPbl = usePblStore((state) => state.resetPbl);
  const resetLicitador = useLicitadoresStore((state) => state.resetLicitador);

  const handleFormReset = () => {
    resetPbl();
    resetLicitador();
  };

  const handlePagePrint = () => {
    window.print();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
      <Button
        color="success"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={addLicitador}
      >
        <Add />
      </Button>

      <Button
        color="error"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={rmLicitador}
      >
        <Remove />
      </Button>

      <Button
        color="secondary"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handlePagePrint}
      >
        <Print />
      </Button>

      <Button
        color="warning"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handleFormReset}
      >
        <RestartAlt />
      </Button>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        sx={{ width: "100%" }}
      >
        <PlayArrow />
      </Button>
    </Box>
  );
}
