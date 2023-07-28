import React from "react";

import {
  StyledAsideSaleLi,
  StyledAsideSaleLiDivImg,
  StyledAsideSaleLiDivItens,
} from "../../styles/asideSale";

export const CurrentSaleProduct = ({ product, quantity, removeProduct }) => {
  return (
    <StyledAsideSaleLi>
      <StyledAsideSaleLiDivImg>
        <img src={product.img} alt={product.name} />
      </StyledAsideSaleLiDivImg>
      <StyledAsideSaleLiDivItens>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>Qtd: {quantity}</p>
      </StyledAsideSaleLiDivItens>

      <button onClick={() => removeProduct(product.id)}>Remover</button>
    </StyledAsideSaleLi>
  );
};
