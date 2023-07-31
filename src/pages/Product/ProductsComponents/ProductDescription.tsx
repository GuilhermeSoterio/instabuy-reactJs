import React, { ReactNode } from "react";
import * as S from "./styles"; // Importe os estilos que você já está utilizando para a descrição do produto

interface ProductDescriptionProps {
  description: ReactNode;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <S.containerContentDescription>
      <S.descriptionProduct>Descrição do Produto</S.descriptionProduct>
      <S.descriptionContent>{description}</S.descriptionContent>
    </S.containerContentDescription>
  );
};

export default ProductDescription;
