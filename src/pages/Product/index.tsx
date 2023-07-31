import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Key } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import * as S from "./styles";
import { useFetch } from "../../services/productService";
import { Minus } from "./ProductsComponents/Minus";
import { TrashIcon } from "./ProductsComponents/TrashIcon";
import { BackArrow } from "./ProductsComponents/BackArrow";
import { formatTextWithBr } from "../../utils/formatTextWithBr";
import ProductDescription from "./ProductsComponents/ProductDescription";

export function Product() {
  const { product } = useParams();
  const [count, setCount] = useState(0);
  const { data } = useFetch(product ?? "");

  if (!data) {
    return <p>Carregando...</p>;
  }

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.contentContainer>
          <S.Container>
            <S.SwiperContainer>
              <Swiper
                //@ts-ignore
                direction={"horizontal"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="SwiperContainer"
              >
                {data.data[0].images.map(
                  (
                    image: string | undefined,
                    index: Key | null | undefined
                  ) => (
                    <>
                      <SwiperSlide key={index}>
                        <S.contentImg>
                          <S.Img
                            src={`https://assets.instabuy.com.br/ib.item.image.large/l-
                              ${image}`}
                          ></S.Img>
                        </S.contentImg>
                      </SwiperSlide>
                    </>
                  )
                )}
              </Swiper>
            </S.SwiperContainer>
          </S.Container>
          <S.ContainerInformations>
            <S.titleProduct>{data.data[0].name}</S.titleProduct>
            <S.marca>{data.data[0].brand}</S.marca>
            <S.containerPrices>
              {data.data[0].prices[0].promo_price ? (
                <>
                  <S.price>R$ {data.data[0].prices[0].promo_price}</S.price>
                  <S.unity>/uni</S.unity>
                  <S.oldPrice>R$ {data.data[0].prices[0].price}</S.oldPrice>
                </>
              ) : (
                <>
                  <S.noPromotePrice>
                    R$ {data.data[0].prices[0].price}
                  </S.noPromotePrice>
                  <S.noPromoteUnity>/uni</S.noPromoteUnity>
                </>
              )}
            </S.containerPrices>
            <S.containerButtonAddAndQuantify>
              <S.containerButtonsWidth>
                <S.buttons onClick={decreaseCount}>
                  {count == 0 ? <TrashIcon></TrashIcon> : <Minus></Minus>}
                </S.buttons>
                {count}
                <S.buttons onClick={increaseCount}>+</S.buttons>
              </S.containerButtonsWidth>
              {count == 0 ? (
                <Link
                  to={`/`}
                  style={{
                    width: "100%",
                    marginRight: "50px",
                  }}
                >
                  <S.buttonMais>
                    <BackArrow></BackArrow>Voltar
                  </S.buttonMais>
                </Link>
              ) : (
                <S.buttonMais>Adicionar</S.buttonMais>
              )}
            </S.containerButtonAddAndQuantify>
          </S.ContainerInformations>
        </S.contentContainer>
        {data.data[0].description && (
          <ProductDescription
            description={formatTextWithBr(data.data[0].description)}
          />
        )}
        <S.containerContentDescription>
          <S.informationContent>
            Informações sobre o produto ou embalagem apresentada pode não ser
            atual ou completo. Sempre consulte o produto físico para as
            informações mais precisas e avisos. Para obter informações
            adicionais, entre em contato com o revendedor ou fabricante.
          </S.informationContent>
        </S.containerContentDescription>
      </S.Wrapper>
    </>
  );
}
