import React from "react";
import Card from "./Card";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "Card",
  component: Card,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card></Card>
    </ThemeProvider>
  );
};
