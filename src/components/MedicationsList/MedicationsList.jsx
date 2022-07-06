import React from "react";
import * as S from "./MedicationsList.styles";
import PropTypes from "prop-types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const MedicationsList = ({ data, handleClick, handleClick1 }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.MedicationsList>
        {data &&
          data.map((item, index) => (
            <S.MedsCard
              id={item.id}
              key={index}
              title={item.title}
              description={item.description}
              handleClick={handleClick}
              time={item.time}
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
    </>
  );
};

MedicationsList.propTypes = {
  data: PropTypes.arrayOf(
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
