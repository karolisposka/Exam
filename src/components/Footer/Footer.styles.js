import Styled from "styled-components";
import Section from "../../components/Section/Section";

export const Footer = Styled.footer`
    background: rgb(164,17,255);
    background: linear-gradient(29deg, rgba(164,17,255,1) 52%, rgba(22,8,105,1) 52%);
    border-top: 1px solid black;
    color:${(props) => props.theme.colors.text.light};
    font-family: ${(props) => props.theme.fonts.name.primary};
    width:100%;
`;

export const Navbar = Styled.footer`
    align-items: center;
    display:flex;
    justify-content: center;
    padding:1rem;
`;

export const StyledSection = Styled(Section)``;

export const Link = Styled.a`
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.name.primary};
    font-size:1.2rem;
    font-weight:bold;
    margin:0.5rem;
     @media (max-width:768px){
        font-size:0.8rem;
        margin:0.3rem;
    }

`;

export const Text = Styled.p`
    padding:1rem;
    text-align:center;
     @media (max-width:768px){
        font-size:0.8rem;
        margin:0.3rem;
    }
`;
