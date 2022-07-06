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
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {data &&
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card
                    key={index}
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
            <S.Comment>
              Click to leave a comment (register users only)
            </S.Comment>
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
