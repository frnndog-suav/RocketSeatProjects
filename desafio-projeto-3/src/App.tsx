import { ThemeProvider } from "styled-components";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Input />
    </ThemeProvider>
  );
}
