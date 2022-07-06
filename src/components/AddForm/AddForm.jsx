import React, { useState } from "react";
import * as S from "./AddForm.styles";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import makeAnimated from "react-select/animated";

const unitsOptions = [
  { value: "mg", label: "milligrams" },
  { value: "g", label: "grams" },
  { value: "pills", label: "pills" },
  { value: "ml", label: "milliletters" },
  { value: "mcg", label: "microgram" },
];

const reminderTime = [
  { value: 6, label: "6:00" },
  { value: 7, label: "7:00" },
  { value: 8, label: "8:00" },
  { value: 9, label: "9:00" },
  { value: 10, label: "10:00" },
  { value: 11, label: "11:00" },
  { value: 12, label: "12:00" },
  { value: 13, label: "13:00" },
  { value: 14, label: "14:00" },
  { value: 15, label: "15:00" },
  { value: 16, label: "16:00" },
  { value: 17, label: "17:00" },
  { value: 18, label: "18:00" },
  { value: 19, label: "19:00" },
  { value: 20, label: "20:00" },
  { value: 21, label: "21:00" },
  { value: 22, label: "22:00" },
  { value: 23, label: "23:00" },
  { value: 24, label: "24:00" },
  { value: 1, label: "1:00" },
  { value: 2, label: "2:00" },
  { value: 3, label: "3:00" },
  { value: 4, label: "4:00" },
  { value: 5, label: "5:00" },
];

const AddForm = ({ handleSubmit, error }) => {
  const [values, setValues] = useState();
  return (
    <S.Container>
      <S.FormContainer>
        {error && <Notification>{error}</Notification>}
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(values);
          }}
        >
          <S.StyledFormInput
            label="Title"
            placeholder="Medication title"
            handleChange={(titleValue) =>
              setValues({ ...values, title: titleValue })
            }
          />
          <S.StyledFormInput
            label="Description"
            placeholder="Description"
            handleChange={(descriptionValue) => {
              setValues({ ...values, description: descriptionValue });
            }}
          />
          <S.SelectsWrapper>
            <S.StyledFormInput
              label="Dose"
              placeholder="Dose size"
              handleChange={(dosageValue) => {
                setValues({ ...values, dosage: dosageValue });
              }}
            />
            <S.StyledSelect
              options={unitsOptions}
              placeholder="Select Units"
              onChange={(e) => {
                setValues({ ...values, units: e.value });
                console.log(e.value);
              }}
            />
          </S.SelectsWrapper>
          <S.StyledSelect
            components={makeAnimated()}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "skybllue",
                primary: "blue",
              },
            })}
            options={reminderTime}
            isMulti
            autoFocus
            placeholder="Select time"
            onChange={(e) => {
              const times = e
                .map((item) => {
                  return item.value;
                })
                .join();
              setValues({ ...values, time: times });
            }}
          />
          <S.buttonWrapper>
            <S.StyledButton type="submit" text="Add record" />
          </S.buttonWrapper>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
};

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default AddForm;
