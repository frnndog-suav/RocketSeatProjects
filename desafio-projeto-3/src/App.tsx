import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GithubProvider } from "./context/GithubContext";
import { applicationRoutes } from "./router/routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <RouterProvider router={applicationRoutes} />
      </GithubProvider>
    </ThemeProvider>
  );
}
