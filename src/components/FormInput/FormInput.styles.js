import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputBox = Styled.div`
    padding: 0.50rem 1.5rem;
    border-top:0.01rem solid black;
    border-radius:${(props) => props.theme.sizes.radius.small};
    box-shadow: 1.5px 2px 2px 0px rgba(0,0,0,0.3);
    box-sizing:border-box;
    margin: ${(props) => props.theme.sizes.spacing.hard};
    font-family: ${(props) => props.theme.fonts.name.primary};
    @media(max-width:768px){
        padding:0.25rem 1rem;
    }
`;

export const Icon = Styled(FontAwesomeIcon)`
    color:${(props) => props.theme.colors.text.secondary};
    margin-right:${(props) => props.theme.sizes.spacing.small};
    width:1rem;
`;

export const Label = Styled.label`
    display:inline-block;
    width:100%;
    margin:0.25rem 0;
    color: ${(props) => props.theme.colors.text.primary};
    font-size:1.25rem;
    font-weight:${(props) => props.theme.fonts.sizes.medium};
    @media(max-width:768px){
        font-size:0.9rem;
    }
`;

export const Input = Styled.input`
    border:none;
    outline: none;
    background:transparent;
    color:${(props) => props.theme.colors.text.primary};
    width: calc(100% - 1.75rem);
    &:focus {
        border-bottom:0.1rem solid ${(props) =>
          props.theme.colors.border.primary};
    },
`;
