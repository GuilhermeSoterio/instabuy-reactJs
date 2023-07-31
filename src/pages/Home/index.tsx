import React, { useMemo } from "react";

import PromotionalCarousel from "./HomeComponents/PromotionalCarousel";
import useCarouselLoader from "../../hooks/useCarouselLoader";
import useFetchData from "../../hooks/useFetchDataLayout";
import Carousel from "./HomeComponents/Carousel";
import * as S from "./styles";
import { PlusButtonWhite } from "./HomeComponents/PlusButtonWhite";

export default function Home() {
  const fetchDataResult = useFetchData();
  const { titles, ItensCarousel, promoData, banners } = useMemo(
    () => fetchDataResult,
    [fetchDataResult]
  );

  const { numCarouselsToShow, handleLoadMoreCarousels } = useCarouselLoader(
    5,
    5
  );

  const carouselsToShow = titles.slice(0, numCarouselsToShow);

  return (
    <>
      {banners.length > 0 && <PromotionalCarousel banners={banners} />}
      <main>
        <Carousel
          items={promoData}
          categorie={"Ofertas"}
          isPromotional={true}
        />
        {carouselsToShow.map((_, index) => (
          <div key={index}>
            <Carousel
              items={ItensCarousel[index]}
              categorie={titles[index]}
              isPromotional={false}
            />
          </div>
        ))}
        {numCarouselsToShow < titles.length && (
          <S.buttonLoadMore onClick={handleLoadMoreCarousels}>
            <PlusButtonWhite></PlusButtonWhite>Carregar Mais
          </S.buttonLoadMore>
        )}
      </main>
    </>
  );
}
