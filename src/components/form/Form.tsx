import { Box } from "@mui/material";

import FormButtons from "@components/form/FormButtons";
import FormFields from "@components/form/FormFields";

import usePblStore from "@stores/pblStore";
import useLicitadoresStore from "@stores/licitadoresStore";
import useResultadosStore from "@stores/resultadosStore";

type HFE = React.FormEvent<HTMLFormElement>;

export default function Form() {
  const pbl = usePblStore((state) => state.pbl);
  const licitadores = useLicitadoresStore((state) => state.licitadores);

  const setPbl = useResultadosStore((state) => state.setPbl);
  const calcLicitacion = useResultadosStore((state) => state.calcLicitacion);

  const handleFormSubmit = (event: HFE) => {
    event.preventDefault();
    setPbl(pbl);
    calcLicitacion(pbl, licitadores);
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 3 }}>
      <FormButtons />
      <FormFields />
    </Box>
  );
}
