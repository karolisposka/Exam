import React from "react";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "view/Footer",
  component: Footer,
};

export const Primary = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Footer></Footer>;
      </ThemeProvider>
    </>
  );
};
