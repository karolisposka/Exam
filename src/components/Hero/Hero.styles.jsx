import Styled from "styled-components";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = Styled.section`
    font-family:${(props) => props.theme.fonts.name.primary};
    width:50%;

`;

export const ItemsContainer = Styled.div`
    display:flex;
    align-items:center;

`;

export const Title = Styled.h1`
    margin: 0 ${(props) => props.theme.sizes.spacing.small};
    color:${(props) => props.theme.colors.text.primary};
    font-weight:${(props) => props.theme.fonts.sizes.bold};
    font-size:2.5rem;
`;

export const Subtitle = Styled.span`
    margin: 0 ${(props) => props.theme.sizes.spacing.small};
    color:${(props) => props.theme.colors.text.primary};
    font-weight:${(props) => props.theme.fonts.sizes.bold};
    font-size:2.5rem;
    
`;

export const TextContainer = Styled.div`
    margin: ${(props) => props.theme.sizes.spacing.small};
    padding:1rem 0;
    
    
`;

export const Text = Styled.p`
    margin: ${(props) => props.theme.sizes.spacing.medium} 0;
    color:${(props) => props.theme.colors.text.primary};
    font-size:1.2rem;
    

`;

export const TextWrapper = Styled.div`
    display:flex;
    align-items:center;
`;

export const StyledButton = Styled(Button)`
    background: ${(props) => props.theme.colors.text.secondary};
    padding:${(props) => props.theme.sizes.spacing.medium};
    border-radius:${(props) => props.theme.sizes.radius.small};
    color:${(props) => props.theme.colors.text.light};
    font-weight:${(props) => props.theme.fonts.sizes.bold};
    border:none;
`;

export const StyledIcon = Styled(FontAwesomeIcon)`
    margin-right:${(props) => props.theme.sizes.spacing.small};
    color:${(props) => props.theme.colors.text.secondary};
    
    
`;
