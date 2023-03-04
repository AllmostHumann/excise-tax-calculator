import { Header } from "../../common/Header/styled";
import { Container } from "./Container/styled";
import CSVTable from "./CSVReader/Input/index.";

const ExciseTaxCalculator = () => {
  return (
    <Container>
      <Header>Excise Tax Calculator for Beer</Header>
      <CSVTable />
    </Container>
  );
};

export default ExciseTaxCalculator;
