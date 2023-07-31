import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import * as S from "./styles";
import React from "react";

interface BannersProps {
  banners: string[];
}

const PromotionalCarousel = ({ banners }: BannersProps) => {
  return (
    <>
      <S.Container>
        <Swiper
          //@ts-ignore
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        >
          {banners.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-wrapper"
              style={{ width: "100%", height: "100%" }}
            >
              <S.ImgBanner
                src={`https://ibassets.com.br/ib.store.banner/bnr-${slide}`}
                alt={"Ofertas de produto e promoções"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </>
  );
};

export default PromotionalCarousel;
