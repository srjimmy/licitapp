import { Box, Paper, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      variant="outlined"
      square
    >
      <Box
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          display: "flex",
          mb: 1,
          mt: 1,
        }}
      >
        <Typography variant="caption" color="initial">
          © {currentYear} LicitApp. Licenciado bajo AGPLv3.
        </Typography>
        <IconButton
          size="small"
          component="a"
          href="https://github.com/srjimmy/licitapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
      </Box>
    </Paper>
  );
}
