import styled from "styled-components";

export const StyledAsideContainer = styled.aside`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  padding-left: 40px;
`;
export const StyledAsideCartContainer = styled.div`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
`;

export const StyledAsideCartAdd = styled.div`
  height: 158px;
  width: 100%;
  background-color: var(--grey-0);
  max-width: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-700);
    font-size: var(--font-size-18);
    color: var(--gray-100);
  }

  span {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-400);
    font-size: var(--font-size-14);
    color: var(--grey-50);
  }
`;

export const StyledAsideCartEmpty = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
  width: 100%;
  color: #ffffff;
  border-radius: 5px 5px 0px 0px;

  h3 {
    font-family: var(--font-family-inter);
    font-weight: var(--font-weigth-700);
    font-style: normal;
    padding-left: 20px;
    font-size: var(--font-size-18);
    line-height: 24px;
  }
`;

export const StyledAsideTotalContainer = styled.div`
  padding: 18px;
  height: 100%;
  hr {
    width: 100%;
    border-top: 2px solid var(--grey-20);
    height: 1px;
  }
`;
export const StyledAsideTotalBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  gap: 20px;
  margin-top: 20px;
  min-height: 100%;
  padding-bottom: 10px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    max-width: 343px;
    min-height: 60px;
    border-radius: var(--border-radius);
    border: none;
    width: 100%;
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-wrigth-600);
    font-size: var(--font-size-16);
    line-height: 19px;
    color: var(--grey-50);
  }
`;

export const StyledAsideTotal = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-600);
    font-size: var(--font-size-14);
    line-height: 24px;
    color: var(--gray-100);
  }
  h3 {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-weigth-600);
    font-size: var(--font-size-14);
    line-height: 24px;
    color: var(--grey-50);
  }

  @media (min-width: 955px) {
    margin: o auto;
  }
`;
