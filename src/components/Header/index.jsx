import React from "react";
import logo from "../../assets/logo.png";
import { StyledButtonTexto } from "../../styles/buttons";
import { StyledInput } from "../../styles/inputs";
import { StyledHeader, StyledHeaderNav } from "../../styles/header";

export const Header = ({ searchInputValue, setSearchInputValue }) => {
  return (
    <StyledHeader>
      <StyledHeaderNav>
        <img src={logo} alt="logo" />
        <div>
          <StyledInput
            type="text"
            placeholder="Digitar Pesquisa"
            value={searchInputValue}
            onChange={(event) =>
              setSearchInputValue(event.target.value.toLowerCase())
            }
          />
          <StyledButtonTexto type="submit" onClick={() => showProducts()}>
            Pesquisar
          </StyledButtonTexto>
        </div>
      </StyledHeaderNav>
    </StyledHeader>
  );
};
