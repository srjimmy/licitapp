import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { ILicitador } from "@services/licitapp/interfaces";
import { fmtLocale } from "@utils/fmt";

interface ResultTableProps {
  resultadosLicitacion: ILicitador[];
}

export default function ResultTable({
  resultadosLicitacion,
}: ResultTableProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Licitador</b>
              </TableCell>
              <TableCell align="center">
                <b>Oferta</b>
              </TableCell>
              <TableCell align="center">
                <b>Anormalmente baja</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultadosLicitacion.map((licitador, index) => (
              <TableRow key={index}>
                <TableCell align="center">{licitador.nombre}</TableCell>
                <TableCell align="center">
                  {fmtLocale(licitador.oferta)} €
                </TableCell>
                <TableCell align="center">
                  {licitador.temeraria ? "Sí" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
