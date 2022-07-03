import Styled from "styled-components";

export const InputBox = Styled.div`
    margin:${(props) => props.theme.sizes.spacing.hard};
    display:flex;
    align-items:center;

`;

export const CheckBox = Styled.input`
    margin-left:${(props) => props.theme.sizes.spacing.small};
    color:pink;

`;

export const Label = Styled.label`
    color:white;


`;
