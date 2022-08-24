import styled from "styled-components";

export const Box = styled.div`
    display: none;

  @media screen and (min-width: 0px) and (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .iconMenuOf {
      width: 2rem;
      height: 2rem;
      display: flex;
      position: absolute;
      right: 1.25rem;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .iconMenuOpen {
      width: 2rem;
      height: 2rem;
      display: flex;
      position: absolute;
      right: 1.25rem;
    }
  }
`;
