import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render } from "@testing-library/react";

import { Product } from "./index";

describe("Product component", () => {
  // Teste para verificar se o componente renderiza corretamente
  test("deve renderizar o componente corretamente", () => {
    const { getByText, getByAltText } = render(<Product />);

    // Verifica se o texto "Carregando..." é exibido enquanto os dados estão sendo buscados
    expect(getByText("Carregando...")).toBeInTheDocument();

    // Exemplo de verificação do texto do título do produto (ajuste de acordo com sua implementação)
    expect(getByText("Título do Produto")).toBeInTheDocument();

    // Exemplo de verificação de imagem do produto (ajuste de acordo com sua implementação)
    expect(getByAltText("Imagem do Produto")).toBeInTheDocument();
  });

  test('deve incrementar o contador quando o botão "+" é clicado', () => {
    const { getByText } = render(<Product />);

    // Verifica se o contador começa com o valor 0
    const countElement = getByText("0");
    expect(countElement).toBeInTheDocument();

    // Simula o clique no botão "+"
    const plusButton = getByText("+");
    fireEvent.click(plusButton);

    // Verifica se o contador foi incrementado para 1 após o clique
    expect(countElement).toHaveTextContent("1");
  });

  test('deve decrementar o contador quando o botão "-" é clicado', () => {
    const { getByText } = render(<Product />);

    // Verifica se o contador começa com o valor 0
    const countElement = getByText("0");
    expect(countElement).toBeInTheDocument();

    // Simula o clique no botão "+"
    const plusButton = getByText("+");
    fireEvent.click(plusButton);

    // Simula o clique no botão "-"
    const minusButton = getByText("-");
    fireEvent.click(minusButton);

    // Verifica se o contador foi decrementado para 0 após o clique
    expect(countElement).toHaveTextContent("0");
  });
});
