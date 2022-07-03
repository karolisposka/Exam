import React, { useState } from "react";
import { Navigation, A11y, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import CommentInput from "../CommentInput/CommentInput";
import * as S from "./SwiperSlides.styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";

const SwiperSlides = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.StyledContainer>
      <S.SwiperContainer>
        <S.StyledSection>
          <Swiper
            modules={[Navigation, A11y, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            autoplay={true}
            reverseDirection={true}
            breakpoints={{
              0: {
                width: 300,
                slidesPerView: 1,
                spaceBetween: 25,
              },
              768: {
                width: 768,
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            {data &&
              data.map((item) => (
                <SwiperSlide>
                  <Card
                    text={item.comment}
                    name={item.username}
                    rating={item.rating}
                    time={item.created_at}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <S.ButtonWrapper>
            <S.StyledButton
              icon={faPlus}
              handleClick={() => {
                toggle();
              }}
            />
            <S.Comment>Click to leave a comment</S.Comment>
          </S.ButtonWrapper>
          {isOpen && (
            <S.CommentFieldContainer>
              <CommentInput />
            </S.CommentFieldContainer>
          )}
        </S.StyledSection>
      </S.SwiperContainer>
    </S.StyledContainer>
  );
};

export default SwiperSlides;
