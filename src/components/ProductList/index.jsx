import React from "react";
import { Product } from "../Product";
import {
  StyledSectionCards,
  StyledSectionCardsUL,
} from "../../styles/sectionCards";

export const ProductList = ({ products, addProduct }) => {
  return (
    <StyledSectionCards>
      <StyledSectionCardsUL>
        {products.map((product) => (
          <Product key={product.id} product={product} addProduct={addProduct} />
        ))}
      </StyledSectionCardsUL>
    </StyledSectionCards>
  );
};
