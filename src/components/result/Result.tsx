import { Box } from "@mui/material";

import useResultadosStore from "@stores/resultadosStore";
import ResultList from "@components/result/ResultList";
import ResultTable from "@components/result/ResultTable";

export default function Form() {
  const pbl = useResultadosStore((state) => state.pbl);
  const resultadosLicitacion = useResultadosStore(
    (state) => state.resultadosLicitacion
  );

  return (
    <Box component="form" sx={{ mb: 3 }}>
      <ResultList pbl={pbl} resultadosLicitacion={resultadosLicitacion} />
      <ResultTable resultadosLicitacion={resultadosLicitacion} />
    </Box>
  );
}
