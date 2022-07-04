import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Notification = ({ children, handleClick }) => {
  return (
    <S.Notification>
      {children}
      <S.Button onClick={handleClick}>
        <S.StyledIcon icon={faClose} />
      </S.Button>
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Notification;
