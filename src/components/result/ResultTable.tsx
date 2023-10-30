import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { mediaOfertas } from "@/services/licitapp/lictaux";
import { ILicitador } from "@services/licitapp/interfaces";
import { fmtLocale } from "@utils/fmt";

interface ResultTableProps {
  resultadosLicitacion: ILicitador[];
}

export default function ResultTable({
  resultadosLicitacion,
}: ResultTableProps) {
  const media = mediaOfertas(resultadosLicitacion);
  const mediaInf = media * 0.9;
  const mediaSup = media * 1.1;

  return (
    <Box sx={{ mb: 3 }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Media -10%</b>
              </TableCell>
              <TableCell align="center">
                <b>Media</b>
              </TableCell>
              <TableCell align="center">
                <b>Media +10%</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{fmtLocale(mediaInf)} €</TableCell>
              <TableCell align="center">{fmtLocale(media)} €</TableCell>
              <TableCell align="center">{fmtLocale(mediaSup)} €</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
                <b>Anormal</b>
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
