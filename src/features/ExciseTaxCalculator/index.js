import { Header } from "../../common/Header/styled";
import { Container } from "./Container/styled";
import CSVImport from "./CSVImport/Input/index.";
import FindValue from "./ValueSearch";

const ExciseTaxCalculator = () => {
  return (
    <Container>
      <Header>Excise Tax Calculator for Beer in Poland</Header>
      <FindValue />
      <CSVImport />
    </Container>
  );
};

export default ExciseTaxCalculator;
