import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  //-------------------------------
  //STYLE RESPONSIVE 0px X 280px
  //-------------------------------

  @media (max-width: 280px) {
    h1 {
      font-size: 20px;
    }
  }
`;
