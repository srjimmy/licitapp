import { Box, TextField } from "@mui/material";

import usePblStore from "@stores/pblStore";
import useLicitadoresStore from "@stores/licitadoresStore";

type HIE = React.ChangeEvent<HTMLInputElement>;

export default function FormFields() {
  const pbl = usePblStore((state) => state.pbl);
  const setPbl = usePblStore((state) => state.setPbl);

  const handlePblChange = (event: HIE) => {
    const newValue = parseInt(event.target.value, 10);
    setPbl(newValue);
  };

  const licitadores = useLicitadoresStore((state) => state.licitadores);
  const setLicitador = useLicitadoresStore((state) => state.setLicitador);

  const handleNombreChange = (index: number, event: HIE) => {
    const newNombre = event.target.value;
    setLicitador(index, newNombre, licitadores[index].oferta);
  };

  const handleOfertaChange = (index: number, event: HIE) => {
    const newOferta = parseInt(event.target.value, 10);
    setLicitador(index, licitadores[index].nombre, newOferta);
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <TextField
          required
          name="pbl"
          label="Presupuesto Base"
          type="number"
          size="small"
          variant="outlined"
          sx={{ width: "100%" }}
          value={isNaN(pbl) ? "" : pbl}
          onChange={handlePblChange}
        />
      </Box>

      {licitadores.map((licitador, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}
        >
          <TextField
            required
            name="nombre"
            label="Licitador"
            type="text"
            size="small"
            variant="outlined"
            sx={{ width: "60%" }}
            value={licitador.nombre}
            onChange={(event: HIE) => handleNombreChange(index, event)}
          />
          <TextField
            required
            name="oferta"
            label="Oferta"
            type="number"
            size="small"
            variant="outlined"
            sx={{ width: "40%" }}
            value={isNaN(licitador.oferta) ? "" : licitador.oferta}
            onChange={(event: HIE) => handleOfertaChange(index, event)}
          />
        </Box>
      ))}
    </Box>
  );
}
