import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = Styled.button`
  align-items:center;
  cursor: pointer;
  display:block;
  display:flex;
  justify-content:Center;
  font-family: "Roboto", sans-serif;
`;
export const Icon = Styled(FontAwesomeIcon)`
  margin:0.25rem;
`;

export const Text = Styled.p`
  display:inline-block;
  letter-spacing:0.1rem;
  margin-right:0.25rem;
  margin:0;
`;
