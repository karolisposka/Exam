import Styled, { keyframes } from "styled-components";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const Header = Styled.header`
    position:fixed;
    top:0;
    background: ${(props) =>
      props.scroll > 0 ? "rgba(0,0,0,0.6)" : "transparent"};
    width:100%;
    z-index:100;
    font-family:${(props) => props.theme.fonts.name.primary};
    transition:0.3s ease;
`;

export const Title = Styled.h1`
    font-size:1.2rem;
    color:White;
    text-transform:uppercase;
    display:inline-block;
`;

export const LogoWrapper = Styled(Link)`
    display:flex;
    align-items:center;
    padding:1rem 0;
    width:10rem;
    text-decoration:none;
`;

export const Navigation = Styled.div`
    display:flex;
    justify-content:space-between;
    height:3rem;

`;

export const Logo = Styled.img`
    object-fit: contain;
    width:3rem;
    color:${(props) => (props.scroll > 0 ? "white" : "black")}; 
    padding: 0 ${(props) => props.theme.sizes.spacing.medium};
`;

export const HamubergerButton = Styled(Button)`
    display:none;
    border:none;
    background:transparent;
    color:${(props) => props.theme.colors.text.light};
    @media (max-width:768px){  
        display:block;
    };
`;

export const NavBar = Styled.nav`
    display:flex;
    align-items:center;
    margin-left:3rem;
    @media(max-width:768px){
        display:none;
        position:fixed;
    }
`;

export const MobileNavBar = Styled.nav`
    display:flex;
    width:100%;
    top:4rem;
    left:0;
    z-index:5;

    flex-direction:column;
    text-align:center;
    width:100%;
    @media(min-width:768px){
        display:none;
    }
`;

export const StyledLink = Styled(Link)`
    text-decoration:none;
    margin:${(props) => props.theme.sizes.spacing.medium};
    font-family: ${(props) => props.theme.fonts.name.primary};
    color: ${(props) => (props.scroll > 0 ? "white" : "black")};
    font-weight: ${(props) => props.theme.fonts.sizes.bold};
    transition:0.3s ease;
    &:hover{
        color:white;
    }
    @media (max-width:768px){
        
    }
`;
