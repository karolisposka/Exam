import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputBox = Styled.div`
    border-radius:0.5rem;
    border-top:0.01rem solid black;
    box-shadow: 1.5px 2px 2px 0px rgba(0,0,0,0.3);
    box-sizing:border-box;
    font-family: ${(props) => props.theme.fonts.name.primary};
    margin: 1.5rem;
    padding: 0.50rem 1.5rem;
    @media(max-width:768px){
        padding:0.25rem 1rem;
    }
`;

export const Icon = Styled(FontAwesomeIcon)`
    color:${(props) => props.theme.colors.text.secondary};
    margin-right:0.5rem;
    width:1rem;
`;

export const Label = Styled.label`
    color: ${(props) => props.theme.colors.text.primary};
    display:inline-block;
    font-size:1.25rem;
    font-weight:${(props) => props.theme.fonts.sizes.medium};
    margin:0.25rem 0;
    width:100%;
    @media(max-width:768px){
        font-size:0.9rem;
    }
`;

export const Input = Styled.input`
    background:transparent;
    border:none;
    color:${(props) => props.theme.colors.text.primary};
    outline: none;
    width: calc(100% - 1.75rem);
    &:focus {
        border-bottom:0.1rem solid blue;
    },
`;
