import styled from "styled-components";

export const StyledSectionCards = styled.section`
  width: 100%;
`;

export const StyledSectionCardsUL = styled.ul`
  width: 100%;
  display: flex;
  overflow-y: auto;
  gap: 20px;
  height: 361px;

  @media (min-width: 955px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 735px;
    width: 1024px;
    padding-left: 30px;
  }
`;

export const StyledSectionCardsli = styled.li`
  width: 300px;
  height: 346px;
  border-radius: 5px;
  border: 2px solid var(--gray-100);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid var(--grey-20);
  :hover {
    border: 2px solid var(--gray-100);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 16px;
  }
`;

export const StyledSectionCardsliImage = styled.div`
  width: 295px;
  height: 150px;
  background-color: var(--grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSectionCardsTitle = styled.h3`
  font-family: var(--font-family-inter);
  font-style: normal;
  font-weight: var(--font-weigth-700);
  font-size: var(--font-size-18);
  line-height: 24px;
  color: var(--gray-100);
`;

export const StyledSectionCardsCategory = styled.span`
  font-family: var(--font-family-inter);
  font-style: normal;
  font-weight: var(--font-weigth-400);
  font-size: var(--font-size-12);
  line-height: 16px;
  color: var(--grey-50);
`;

export const StyledSectionCardsPrice = styled.p`
  font-family: var(--font-family-inter);
  font-style: normal;
  font-weight: var(--font-weigth-600);
  font-size: var(--font-size-14);
  line-height: 24px;
  color: var(--color-primary);
`;
