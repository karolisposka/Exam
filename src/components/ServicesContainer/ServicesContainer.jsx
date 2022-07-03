import React from "react";
import * as S from "./ServicesContainer.styles";
import {
  faCalendar,
  faPills,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";

const ServicesContainer = () => {
  return (
    <>
      <S.ServicesContainer>
        <S.Title> Our Services </S.Title>
        <S.StyledSection>
          <S.StyledCard
            title="Get A Reminder"
            text="Do not forget to take you medicines. Schedule notifcations for your medications consumption"
            icon={faCalendar}
          />
          <S.StyledCard
            title="Hello world"
            text="Do not forget to take you medicines. Schedule notifcations for your medications consumption"
            icon={faPills}
          />
          <S.StyledCard
            title="Make A Notes"
            text="Do not forget to take you medicines. Schedule notifcations for your medications consumption"
            icon={faNotesMedical}
          />
        </S.StyledSection>
      </S.ServicesContainer>
    </>
  );
};

export default ServicesContainer;
