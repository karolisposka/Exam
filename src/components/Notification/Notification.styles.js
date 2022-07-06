import styled from "styled-components";

export const Notification = styled.div`
  background: ${(props) => props.theme.colors.background.secondary};
  color: ${(props) => props.theme.colors.text.light};
  border-radius: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  padding: 1rem;
  width: 100%;
`;
