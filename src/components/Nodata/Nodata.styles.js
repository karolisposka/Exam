import Styled from "styled-components";

export const NoDataContainer = Styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: ${(props) => props.theme.fonts.name.primary};
    padding:${(props) => props.theme.sizes.spacing.hard};
`;

export const Text = Styled.h1`
    font-size:3rem;
`;
