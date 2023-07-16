import { Box, Button } from "@mui/material";

export default function FormButtons() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
      <Button
        color="success"
        variant="contained"
        sx={{ width: "100%" }}
        // onClick={}
      >
        Añadir
      </Button>

      <Button
        color="error"
        variant="contained"
        sx={{ width: "100%" }}
        // onClick={}
      >
        Quitar
      </Button>

      <Button
        type="reset"
        color="secondary"
        variant="contained"
        sx={{ width: "100%" }}
        // onClick={}
      >
        Reset
      </Button>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        sx={{ width: "100%" }}
        // onSubmit={}
      >
        Calcular
      </Button>
    </Box>
  );
}
