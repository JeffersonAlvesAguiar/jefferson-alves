import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 10rem;
  padding-right: 10rem;
  text-align: left;

  //-------------------------------
  //STYLE RESPONSIVE 0px X 712px
  //-------------------------------
  @media (max-width: 712px) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 540px
  //-------------------------------
  @media (max-width: 712px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 414px
  //-------------------------------

  @media (max-width: 414px) {
    padding-top: 2rem;
    padding-bottom: 0rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: left;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 280px
  //-------------------------------

  @media (max-width: 280px) {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: left;
    h1 {
      font-size: 19px;
    }
  }
`;
export const Box = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 6rem;

  h1 {
    -webkit-animation: h1 0.3s ease-in infinite both;
    animation: h1 0.3s ease-in infinite both;

    @-webkit-keyframes h1 {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
    @keyframes h1 {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
  }

  p {
    font-size: 22px;
  }

    //-------------------------------
  //STYLE RESPONSIVE 0px X 478px
  //-------------------------------

  @media (max-width: 478px) {
    padding-top: 2rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 17px;
    }
    p {
      font-size: 10px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 280px
  //-------------------------------

  @media (max-width: 280px) {
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: left;
    h1 {
      font-size: 17px;
    }
    p {
      font-size: 14px;
    }
  }
`;
