import { AppBar, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <AppBar position="relative" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
