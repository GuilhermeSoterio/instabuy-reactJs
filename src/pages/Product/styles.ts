import { styled } from "styled-components"

export const Container = styled.div`
  .swiper-pagination-bullet {
    background-color: #707070;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .swiper-pagination {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 1430px) {
    width: 600px;
    height: 530px;
  }

  @media (max-width: 1330px) {
    width: 400px;
    height: 360px;
   }

  @media (max-width: 956px) {
    width: 340px;
    height: 330px;
    display: flex;
    justify-content: center;
  }
  width: 690px;
`

export const ContainerInformations = styled.div`
  width: 100%;
  height: 600px;

  @media (max-width: 1330px) {
    padding-right: 20px;
    height: 330px;
  }

  @media (max-width: 956px) {
    padding-right: 20px;
    height: 330px;
  }

  @media (max-width: 720px) {
    width: 80%;
  }
  
`

export const Img = styled.img`
    object-fit: contain;
    width: 95%;
    height: 90%;

    @media (max-width: 1430px) {
        width: 75%;
        height: 90%;
    }

    @media (max-width: 956px) {
        width: 100%;
    }

`;

export const SwiperContainer = styled.div`
    width: 92%;
    height: 100%;
`;

export const contentImg = styled.div`
    display: flex;
    padding: 35px;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: 1430px) {
        padding: 15px;
    }

`;

export const Wrapper = styled.div`
    background-color: #F9F9F9;
    margin: auto;
    width: 80vw;
    height: 100%;

    @media (max-width: 1430px) {
        width: 87vw;
    }

    @media (max-width: 1330px) {
        width: 93vw;
    }

    @media (max-width: 956px) {
        width: 95vw;
    }

`;

export const containerButtonAddAndQuantify = styled.div`
    margin-top: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const containerButtonsWidth = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    width: 280px;
`

export const contentContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    margin-top: 30px;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: 720px) {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    
`;

export const titleProduct = styled.h2`
    display: flex;
    text-align: start;
    width: 100%;
    margin-top: 30px;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0rem;
`;

export const marca = styled.p`
    text-align: start;
    font-family: 'Poppins','Verdana','sans-serif';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin-top: 20px;
`;

export const price = styled.p`
    font-family: 'Poppins','Verdana','sans-serif';
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0rem;
    margin-top: 20px;
    color: var(--ib-colors-brand-tertiary);
`

export const noPromotePrice = styled.p`
    font-family: 'Poppins','Verdana','sans-serif';
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0rem;
    margin-top: 20px;
    color: black;
`

export const oldPrice = styled.p`
    font-family: 'Poppins','Verdana','sans-serif';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.0156rem;
    text-decoration: line-through;
    color: #707070;
    padding-left: 18px;
    padding-bottom: 7px;
    padding-top: 20px;
`
export const unity = styled.span`
    color: var(--ib-colors-brand-tertiary);
    font-family: 'Poppins','Verdana','sans-serif';
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0156rem;
    padding-left: 5px;
`

export const noPromoteUnity = styled.span`
    color: black;
    font-family: 'Poppins','Verdana','sans-serif';
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0156rem;
    padding-left: 5px;
`


export const buttonMais = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    padding: 10px 0px;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 0rem;
    margin-left: 50px;
    color: white;
    background-color: var(--ib-colors-brand-primary);

    @media (max-width: 1330px) {
        margin-right: 20px;
    }

    @media (max-width: 956px) {
        margin-left: 0px;
    }

`

export const buttons = styled.button`
    cursor: pointer;
    border: none;
    height: 48px;
    width: 48px;
    color: #707070;
    font-size: 1.5rem;
    background-color: var(--gray-primary);

    &:hover {
    background-color: var(--gray-hover);
  }

    &:active {
        background-color: var(--gray-active);
    }
`

export const containerPrices = styled.div`
    align-items: flex-end;
    display: flex;
`

export const informationContent = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;
`

export const descriptionContent = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    white-space: pre-wrap;
    letter-spacing: 0.0156rem;
`

export const descriptionProduct = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0rem;
`

export const containerContentDescription = styled.div`
    text-align: start;
    background-color: white;
    border-radius: 5px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 10px;
`;