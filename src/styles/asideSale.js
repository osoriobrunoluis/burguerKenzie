import styled from "styled-components";

export const StyledAsideSaleDiv = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-0);
  max-width: 384px;
  width: 96%;
`;

export const StyledAsideSaleUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 23px;
`;

export const StyledAsideSaleLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  button {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-500);
    font-size: var(--font-size-12);
    color: #bdbdbd;
    background-color: var(--gray-0);
    border: none;
  }
`;

export const StyledAsideSaleLiDivImg = styled.div`
  width: 80px;
  height: 80px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  img {
    width: 70px;
    height: 70px;
  }
`;

export const StyledAsideSaleLiDivItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;

  h2 {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-700);
    font-size: var(--font-size-16);
    color: var(--gray-100);
  }

  span {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-400);
    font-size: var(--font-size-12);
    color: var(--grey-50);
  }

  p {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-700);
    font-size: var(--font-size-10);
    color: var(--gray-100);
  }
`;
