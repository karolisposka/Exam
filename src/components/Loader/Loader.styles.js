import Styled, { keyframes } from "styled-components";
import Container from "../Container";
import Section from "../Section/Section";

export const LoaderContainer = Styled(Container)`
    height:10rem;
    background:pink;

`;

export const StyledSection = Styled(Section)`
    display:flex;
    justify-content:center;
    align-items: center;

`;

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }


`;

export const Loader = Styled.div`
    border: 2rem solid ${(props) => props.theme.colors.text.primary};
    border-radius: 100%;
    width:5rem;
    height:5rem;
    animation:0.2s ${spin} ease;
`;
