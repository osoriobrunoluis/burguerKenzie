import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
`;
export const StyledDiv = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 32px;
  margin: 0 auto;

  @media (min-width: 955px) {
    flex-direction: row;
  }
`;
