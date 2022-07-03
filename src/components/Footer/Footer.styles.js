import Styled from "styled-components";
import Section from "../../components/Section/Section";

export const Footer = Styled.footer`
    border-top: 1px solid black;
    background: rgb(164,17,255);
    background: linear-gradient(29deg, rgba(164,17,255,1) 52%, rgba(22,8,105,1) 52%);
    font-family: ${(props) => props.theme.fonts.name.primary};
    color:${(props) => props.theme.colors.text.light};
    width:100%;
    
`;

export const Navbar = Styled.footer`
 display:flex;
 justify-content: center;
 align-items: center;
 padding:1rem;
 

`;

export const StyledSection = Styled(Section)``;
export const Link = Styled.a`
    margin:0.5rem;
    font-family: ${(props) => props.theme.fonts.name.primary};
    font-size:1.2rem;
    font-weight:bold;
    cursor: pointer;
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
