import { Box, TextField } from "@mui/material";

import usePblStore from "@stores/pblStore";

export default function FormFields() {
  const pbl = usePblStore((state) => state.pbl);
  const setPbl = usePblStore((state) => state.setPbl);

  const handlePblChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setPbl(newValue);
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
          value={pbl}
          onChange={handlePblChange}
        />
      </Box>

      <Box
        // key={}
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
          // value={}
          // onChange={}
        />
        <TextField
          required
          name="oferta"
          label="Oferta"
          type="number"
          size="small"
          variant="outlined"
          sx={{ width: "40%" }}
          // value={}
          // onChange={}
        />
      </Box>
    </Box>
  );
}
