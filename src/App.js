import { GlobalStyle } from "./features/Theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import ExciseTaxCalculator from "./features/ExciseTaxCalculator";
import { colorNames } from "./features/Theme/theme";

function App() {
  return (
    <ThemeProvider theme={colorNames}>
      <GlobalStyle />
      <Normalize />
      <ExciseTaxCalculator />
    </ThemeProvider>
  );
}

export default App;
