import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
