import { Box, Typography } from "@mui/material";

import { ILicitador } from "@services/licitapp/interfaces";
import { fmtLocale } from "@utils/fmt";

interface ResultListProps {
  pbl: number;
  resultadosLicitacion: ILicitador[];
}

export default function ResultList({
  pbl,
  resultadosLicitacion,
}: ResultListProps) {
  const numLicts = resultadosLicitacion.length;

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Resultados del cálculo
      </Typography>

      <Typography>
        Resultados del cálculo para un presupuesto base de licitación (PBL) de{" "}
        <b>{fmtLocale(pbl)}</b> € y las siguientes <b>{numLicts}</b> ofertas
        presentadas por los licitadores, siguiendo lo citado en el Artículo 85.3
        RGLCAP:
      </Typography>

      {resultadosLicitacion.map((licitador, index) => (
        <ul>
          <li key={index}>
            La oferta de la entidad <b>{licitador.nombre}</b> que asciende a{" "}
            <b>{fmtLocale(licitador.oferta)}</b> € y supone una baja del{" "}
            <b>{(100 - (licitador.oferta / pbl) * 100).toFixed(2)}</b>% sobre el
            PBL, presenta valores{" "}
            <Typography
              display="inline"
              color={licitador.temeraria ? "error" : ""}
            >
              <b>{licitador.temeraria ? "anormales" : "normales"}</b>.
            </Typography>
          </li>
        </ul>
      ))}
    </Box>
  );
}
