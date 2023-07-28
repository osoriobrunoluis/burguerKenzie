import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  background-color: var(--grey-0);
`;
export const StyledHeaderNav = styled.nav`
  width: 100%;
  height: 139px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14.28px;
  gap: 14px;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 80px;
    flex-direction: row;
    max-width: 1600px;
    width: 100%;
    justify-content: space-between;
    padding: 0;
    padding: 0px 30px 0px 30px;
  }

  div {
    display: flex;
    height: 60px;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 10px 0px 10px;
    border-radius: var(--border-radius);
    :hover {
      border: 2px solid var(--gray-100);
    }
    @media (min-width: 955px) {
      align-items: center;
      max-width: 365px;
    }
  }
`;
