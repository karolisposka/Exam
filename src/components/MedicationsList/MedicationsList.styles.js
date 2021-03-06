import Styled from "styled-components";
import Button from "../Button/Button";
import MedicationCard from "../MedicationCard/MedicationCard";
import Section from "../Section/Section";
import SearchBar from "../SearchBar/SearchBar";
import Container from "../Container/Container";

export const MedicationsListContainer = Styled.div`
    background:#fffe;
    width:100%;
    position:relative;
    
`;

export const StyledContainer = Styled(Container)`

`;

export const StyledSearch = Styled(SearchBar)`


`;

export const StyledSection = Styled(Section)`

`;

export const MedicationsList = Styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:0.5rem;
    
`;

export const MedsCard = Styled(MedicationCard)`
    background:white;
    width:calc(33.33% - 1rem);
    margin:0.5rem;

    @media (max-width:768px){
        width:100%
    }

`;

export const StyledSearchBar = Styled(SearchBar)`
    color:black;

`;

export const AddButtonWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
   
`;

export const AddButton = Styled(Button)`
    margin:0.5rem;
    border:none;
    background:${(props) => props.theme.colors.background.secondary};
    color:${(props) => props.theme.colors.text.light};
    padding:0.5rem;
    font-size:0.6rem;
    border-radius:0.25rem;


`;
