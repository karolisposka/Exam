import React from "react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button Text</Button>
    </ThemeProvider>
  );
};
