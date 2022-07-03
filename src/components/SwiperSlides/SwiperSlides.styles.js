import Styled from "styled-components";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Section from "../Section/Section";

export const SwiperContainer = Styled.div`
   padding:${(props) => props.theme.sizes.spacing.medium};
   
`;

export const StyledContainer = Styled(Container)`

`;

export const StyledSection = Styled(Section)`

`;

export const ButtonWrapper = Styled.div`

`;

export const StyledButton = Styled(Button)`
   margin-top:1rem;


`;
