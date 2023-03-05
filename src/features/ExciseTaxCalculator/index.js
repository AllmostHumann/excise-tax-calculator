import { Header } from "../../common/Header/styled";
import { Container } from "./Container/styled";
import CSVTable from "./CSVReader/Input/index.";
import FindSymbol from "./SymbolFinder";

const ExciseTaxCalculator = () => {
  return (
    <Container>
      <Header>Excise Tax Calculator for Beer</Header>
      <CSVTable />
      <FindSymbol />
    </Container>
  );
};

export default ExciseTaxCalculator;
