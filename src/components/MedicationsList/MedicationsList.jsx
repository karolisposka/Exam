import React from "react";
import * as S from "./MedicationsList.styles";
import PropTypes, { arrayOf } from "prop-types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const MedicationsList = ({
  data,
  handleClick,
  handleClick1,
  children,
  display,
}) => {
  const navigate = useNavigate();
  return (
    <S.MedicationsListContainer>
      <S.StyledSection>
        <S.MedicationsList>
          {data &&
            data.map((item) => (
              <S.MedsCard
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                handleClick={handleClick}
                time={item.time}
                handleClick1={handleClick1}
              />
            ))}
        </S.MedicationsList>
        <S.AddButtonWrapper>
          <S.AddButton
            text="add"
            icon={faPlus}
            handleClick={() => {
              navigate("/add");
            }}
          />
        </S.AddButtonWrapper>
      </S.StyledSection>
      {children}
    </S.MedicationsListContainer>
  );
};

MedicationsList.propTypes = {
  data: arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      id: PropTypes.number,
    })
  ),
  handleClick: PropTypes.func,
};

export default MedicationsList;
