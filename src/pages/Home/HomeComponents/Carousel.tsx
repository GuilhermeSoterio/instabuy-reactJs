import { Link } from "react-router-dom";

import { removeAccentsAndSpecialCharsAndFormatSpaces } from "../../../utils/replaceSpaces";
import useCarousel from "../../../hooks/useCarousel";
import { PlusButton } from "./PlusButton";
import { OfferIcon } from "./OfferIcon";
import { Item } from "../../../@types/types";
import { Arrow } from "./Arrow";
import * as S from "./styles";

interface CarouselProps {
  items: Item[];
  categorie: string;
  isPromotional: boolean;
}

function Carousel({ items, categorie, isPromotional }: CarouselProps) {
  const { carousel, handleLeftClick, handleRightClick } = useCarousel();

  return (
    <S.container>
      <S.containerArrowButton onClick={handleLeftClick}>
        <S.ArrowInverse>
          <Arrow></Arrow>
        </S.ArrowInverse>
      </S.containerArrowButton>

      <S.containerBoxCarousel>
        <h2>
          {isPromotional && <OfferIcon></OfferIcon>}
          {categorie}
        </h2>
        <S.carouselContent ref={carousel}>
          {items &&
            items.map((item) => {
              const { id, name, slug, prices, images } = item;
              const { price, promo_price } =
                prices.length > 0 ? prices[0] : { price: 0, promo_price: 0 };
              return (
                <S.itensContentCarousel key={id}>
                  <Link
                    to={`/Products/${removeAccentsAndSpecialCharsAndFormatSpaces(
                      slug
                    )}`}
                    style={{ textDecoration: "none" }}
                  >
                    <S.containerPlusButton>
                      <PlusButton></PlusButton>
                    </S.containerPlusButton>
                    <S.ImgWrapper>
                      {/* Template Strings*/}
                      {images.length > 0 ? (
                        <S.Img
                          src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${images[0]}`}
                          alt={name}
                        />
                      ) : (
                        <img
                          src="imagem-padrao.jpg"
                          alt="Imagem não disponível"
                        />
                      )}
                    </S.ImgWrapper>
                    <S.containerPrices>
                      {promo_price ? (
                        <>
                          <S.price>{promo_price}</S.price>
                          <S.oldPrice>R$ {price}</S.oldPrice>
                        </>
                      ) : (
                        <S.priceNoPromote>R$ {price}</S.priceNoPromote>
                      )}
                    </S.containerPrices>
                    <S.name>{name}</S.name>
                  </Link>
                </S.itensContentCarousel>
              );
            })}
        </S.carouselContent>
      </S.containerBoxCarousel>

      <S.containerArrowButtonRight onClick={handleRightClick}>
        <Arrow></Arrow>
      </S.containerArrowButtonRight>
    </S.container>
  );
}

export default Carousel;
