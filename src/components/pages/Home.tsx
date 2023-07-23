import { Container } from "@mui/material";

import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Form from "@components/form/Form";
import Result from "@components/result/Result";

export default function Home() {
  return (
    <>
      <Header title="LicitApp" />
      <Container maxWidth="sm">
        <Form />
      </Container>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Result />
      </Container>
      <Footer />
    </>
  );
}
