import React from "react";
import { StyledButtonAdd } from "../../styles/buttons";
import { StyledImgLarge } from "../../styles/img";
import {
  StyledSectionCardsli,
  StyledSectionCardsliImage,
  StyledSectionCardsTitle,
  StyledSectionCardsCategory,
  StyledSectionCardsPrice,
} from "../../styles/sectionCards";

export const Product = ({ product, addProduct }) => {
  return (
    <StyledSectionCardsli>
      <StyledSectionCardsliImage>
        <StyledImgLarge src={product.img} alt={product.name} />
      </StyledSectionCardsliImage>
      <div>
        <StyledSectionCardsTitle>{product.name}</StyledSectionCardsTitle>
        <StyledSectionCardsCategory>
          {product.category}
        </StyledSectionCardsCategory>
        <StyledSectionCardsPrice>
          R$ {product.price.toFixed(2)}
        </StyledSectionCardsPrice>
        <StyledButtonAdd onClick={() => addProduct(product.id)}>
          Adicionar
        </StyledButtonAdd>
      </div>
    </StyledSectionCardsli>
  );
};
