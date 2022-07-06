import React, { useState } from "react";
import * as S from "./CommentInput.styles";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Notification from "../Notification/Notification";
const url = process.env.REACT_APP_BACK_API;

const CommentInput = () => {
  const [rating, setRating] = useState(null);
  const [notification, setNotification] = useState();
  const [selectedhover, setSelectedHover] = useState(null);
  const [values, setValues] = useState({
    rating: "null",
    text: "",
  });

  const postComment = async (inputs) => {
    try {
      const res = await fetch(url + "v1/reviews/rate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      return setNotification(data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.CommentContainer>
      {notification && <Notification>${notification}</Notification>}
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          postComment(values);
        }}
      >
        <S.RatingsWrapper>
          {[...Array(Math.round(5))].map((item, index) => {
            const ratingValue = index + 1;
            return (
              <S.Star
                key={index}
                value={ratingValue}
                icon={faStar}
                onClick={() => {
                  setRating(ratingValue);
                  setValues({ ...values, rating: ratingValue });
                }}
                onMouseEnter={() => setSelectedHover(ratingValue)}
                onMouseLeave={() => setSelectedHover(null)}
                style={{
                  color:
                    ratingValue <= (selectedhover || rating) ? "gold" : "black",
                }}
              />
            );
          })}
        </S.RatingsWrapper>
        <S.CommentWrapper>
          <S.CommentInput
            placeholder="Type in comment"
            onChange={(e) => {
              setValues({ ...values, text: e.target.value });
            }}
          />
        </S.CommentWrapper>
        <S.SubmitButton type="submit" text="submit" />
      </S.Form>
    </S.CommentContainer>
  );
};

export default CommentInput;
