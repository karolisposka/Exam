import React from "react";
import FormInput from "./FormInput";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "FormInput",
  component: FormInput,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormInput
        label="Email Address"
        type="email"
        placeholder="example@example.com"
        handleChange={(e) => alert(e.target.value)}
      />
    </ThemeProvider>
  );
};
