import { Header } from "../../common/Header/styled";
import { Container } from "./Container/styled";
import CSVTable from "./CSVReader/Input/index.";
import FindValue from "./ValueSearch";

const ExciseTaxCalculator = () => {
  return (
    <Container>
      <Header>Excise Tax Calculator for Beer</Header>
      <FindValue />
      <CSVTable />
    </Container>
  );
};

export default ExciseTaxCalculator;
