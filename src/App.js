import { GlobalStyle } from "./features/Theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import ExciseTaxCalculator from "./features/ExciseTaxCalculator";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Normalize />
      <ExciseTaxCalculator />
    </ThemeProvider>
  );
}

export default App;
