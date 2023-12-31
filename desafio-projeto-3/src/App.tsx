import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { HomePage } from "./pages/Home";
import { GithubProvider } from "./context/GithubContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <HomePage />
      </GithubProvider>
    </ThemeProvider>
  );
}
