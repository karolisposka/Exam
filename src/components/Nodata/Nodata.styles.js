import Styled from "styled-components";

export const NoDataContainer = Styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${(props) => props.theme.colors.text.light};
    font-family: ${(props) => props.theme.fonts.name.primary};
`;

export const Text = Styled.h1`
    font-size:3rem;
`;
