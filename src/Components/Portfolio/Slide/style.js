import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    width: 30rem;
    height: 15rem;
  }
  a {
    width: 100%;
    font-size: 1.25rem;
    text-align: center;
    cursor: pointer;
  }

  //-------------------------------
  // STYLE RESPONSIVE 0px X 912px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 912px) {
    img {
      width: 25rem;
      height: 10rem;
    }
  }

  //-------------------------------
  // STYLE RESPONSIVE 0px X 423px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 423px) {
    img {
      width: 20rem;
      height: 5rem;
    }
  }

  //-------------------------------
  // STYLE RESPONSIVE 0px X 335px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 335px) {
    img {
      width: 15rem;
      height: 5rem;
    }
  }
`;
