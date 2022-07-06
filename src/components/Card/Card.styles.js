import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = Styled.div`
  border:1px solid rgba(0,0,0,0.3);
  box-shadow:1px 2px 1px 1px rgba(0,0,0,0.3);
  box-sizing:border-box;
  height:23rem;
  width:100%;
  @media(max-width:768px){
    height:18rem;
  }
`;
export const Image = Styled.img`
  border-radius:10rem;
  box-shadow:1px 2px 1px 1px rgba(0,0,0,0.3);
  display:block;
  margin: 2rem auto;
  width:5rem;
  @media(max-width:768px){
    width:3rem;
    margin: 1rem auto;
  }
`;

export const ratingWrapper = Styled.div`
  display:flex;
  justify-content:center;
`;

export const Stars = Styled(FontAwesomeIcon)`
  color:gold;
`;

export const Title = Styled.h1`
  text-align:center;
  font-size:1.2rem;
`;

export const Text = Styled.p`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  min-height:3rem;
  overflow:hidden;
  padding:1rem 1.5rem;
  word-wrap: break-word;
`;

export const InfoWrapper = Styled.div`
  align-items:center;
  display:flex;
  justify-content: flex-end;
  margin:1.5rem;
`;

export const Likes = Styled.span`
  margin:0.5rem;
  font-size: 1.2rem;
`;

export const StyledIcon = Styled(FontAwesomeIcon)`
  color:blue;

`;

export const LikesButton = Styled.button`
  background:transparent;
  border:none;
  cursor:pointer;
`;
