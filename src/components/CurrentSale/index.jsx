import React from "react";
import { CurrentSaleProduct } from "../CurrentSaleProduct";

import {
  StyledAsideContainer,
  StyledAsideCartContainer,
  StyledAsideCartAdd,
  StyledAsideCartEmpty,
  StyledAsideTotalContainer,
  StyledAsideTotal,
  StyledAsideTotalBtn,
} from "../../styles/aside";

import { StyledAsideSaleDiv, StyledAsideSaleUl } from "../../styles/asideSale";

export const CurrentSale = ({
  currentSale,
  products,
  removeProduct,
  removeAll,
}) => {
  const getProductById = (id) => products.find((product) => product.id === id);
  const totalCurrentSale = currentSale.reduce((total, current) => {
    const product = getProductById(current.id);
    const price = product ? product.price : 0;
    return total + current.quantity * price;
  }, 0);

  return (
    <StyledAsideContainer>
      <StyledAsideCartContainer>
        {currentSale.length === 0 || products.length === 0 ? (
          <>
            <StyledAsideCartEmpty>
              <h3>Carrinho de compras</h3>
            </StyledAsideCartEmpty>
            <StyledAsideCartAdd>
              <p>Sua sacola está vazia</p>
              <span>Adicione Itens</span>
            </StyledAsideCartAdd>
          </>
        ) : (
          <StyledAsideSaleDiv>
            <StyledAsideCartEmpty>
              <h3>Carrinho de compras</h3>
            </StyledAsideCartEmpty>
            <StyledAsideSaleUl>
              {currentSale.map((cartItem) => {
                const product = getProductById(cartItem.id);
                return (
                  <CurrentSaleProduct
                    key={cartItem.id}
                    product={product}
                    quantity={cartItem.quantity}
                    removeProduct={removeProduct}
                  />
                );
              })}
            </StyledAsideSaleUl>
            <StyledAsideTotalContainer>
              <hr></hr>
              <StyledAsideTotalBtn>
                <StyledAsideTotal>
                  <p>Total</p>
                  <h3>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalCurrentSale)}
                  </h3>
                </StyledAsideTotal>
                <button onClick={removeAll}>Remover todos</button>
              </StyledAsideTotalBtn>
            </StyledAsideTotalContainer>
          </StyledAsideSaleDiv>
        )}
      </StyledAsideCartContainer>
    </StyledAsideContainer>
  );
};
