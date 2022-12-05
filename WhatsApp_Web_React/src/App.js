import "./index.css";
import { ThemeProvider } from "@mui/material";
import React from "react";

import Header from "./components/header/Header";
import Main from "./components/main";
import { theme } from "./theme";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
