import React, { useState } from "react";
import { Navigation, A11y, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import AddForm from "../AddForm/AddForm";
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
                spaceBetween: 20,
              },
              768: {
                width: 768,
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {data &&
              data.map((item) => (
                <SwiperSlide>
                  <Card
                    text={item.text}
                    name={item.name}
                    rating={item.rating}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <S.ButtonWrapper>
            <S.StyledButton
              text="leave comment"
              handleClick={() => {
                toggle();
              }}
            />
          </S.ButtonWrapper>
          {isOpen && <AddForm></AddForm>}
        </S.StyledSection>
      </S.SwiperContainer>
    </S.StyledContainer>
  );
};

export default SwiperSlides;
