import { Box } from "@mui/material";

import FormButtons from "@components/form/FormButtons";
import FormFields from "@components/form/FormFields";

export default function Form() {
  return (
    <Box component="form" sx={{ mb: 3 }}>
      <FormButtons />
      <FormFields />
    </Box>
  );
}
