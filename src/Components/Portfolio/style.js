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
  //STYLE RESPONSIVE 0px X 375px
  //-------------------------------

  @media screen and (min-width: 0px) and (max-width: 375px) {
    h1 {
      font-size: 20px;
    }
  }

    //-------------------------------
  //STYLE RESPONSIVE 0px X 235px
  //-------------------------------

  @media screen and (min-width: 0px) and (max-width: 235px) {
    h1 {
      font-size: 15px;
    }
  }
`;
