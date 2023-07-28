import styled from "styled-components";

export const StyledButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  background-color: var(--color-primary);
  width: 106px;
  height: 40px;
  border-radius: var(--border-radius);
  border: 2px solid var(--color-primary);
  font-family: var(--font-family-inter);
  font-weight: var(--font-weigth-600);
  font-size: var(--font-size-14);
  color: #ffffff;
  font-style: normal;
  box-sizing: border-box;
  :hover {
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }
`;

export const StyledButtonTexto = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 107px;
  height: 40px;
  font-size: var(--font-size-14);
  font-family: var(--font-family-inter);
  font-weight: var(--font-weigth-500);
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: #ffffff;
  border: 2px solid var(--color-primary);
  :hover {
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }
`;
export const StyledButtonRemove = styled.button`
  font-family: var(--font-family-inter);
  font-style: normal;
  font-weight: var(--font-weigth-500);
  font-size: var(--font-size-12);
  color: #bdbdbd;
  background-color: var(--gray-0);
  border: none;
`;
