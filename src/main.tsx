import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/Header";
import "./assets/index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    info: {
      main: "rgb(255,171,126);",
      contrastText: "#212121",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </StrictMode>
);
