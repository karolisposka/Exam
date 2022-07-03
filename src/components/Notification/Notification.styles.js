import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Notification = styled.div`
  background: ${(props) => (props.status === "true" ? "green" : "red")};
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  align-self: flex-start;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: red;
`;
