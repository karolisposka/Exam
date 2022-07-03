import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = Styled.button`
  display:flex;
  align-items:center;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  display:block;
`;
export const Icon = Styled(FontAwesomeIcon)`
 

`;

export const Text = Styled.p`
  display:inline-block;
  margin:0;
  letter-spacing:0.1rem;
  margin-right:0.25rem;
`;
