import { Container } from "@mui/material";

import Header from "@components/layout/Header";
import Form from "@components/form/Form";
import Result from "@components/result/Result";

export default function Home() {
  return (
    <>
      <Header title="LicitApp" />
      <Container maxWidth="sm">
        <Form />
      </Container>
      <Container maxWidth="lg">
        <Result />
      </Container>
    </>
  );
}
