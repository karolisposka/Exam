import Styled from "styled-components";
import Section from "../Section/Section";
import ServicesCard from "../ServicesCard/ServicesCard";

export const ServicesContainer = Styled.div`


`;

export const Title = Styled.h1`
    text-align:center;
    font-family:${(props) => props.theme.fonts.name.primary};
`;

export const StyledSection = Styled(Section)`
    display:flex;
     @media (max-width:768px){
        display:block;
    }


`;
export const StyledCard = Styled(ServicesCard)`
    width:33.33%;
    padding:2rem 0;
    @media(max-width:768px){
        width:100%;


    }
`;

export const ServicesList = Styled.div`
    flex-wrap:wrap;
    padding:1rem;
   
`;
