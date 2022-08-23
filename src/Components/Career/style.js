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
  //STYLE RESPONSIVE 486px X 712px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 912px) {
    padding-left: 1rem;
    padding-right: 1rem;
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
  span{
    font-weight: bold;
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 912px
  //-------------------------------

  @media screen and (min-width: 0px) and (max-width: 912px) {
    padding-top: 3rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 411px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 411px) {
    padding-top: 3rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 19px;
    }
    p {
      font-size: 17px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 352px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 352px) {
    padding-top: 3rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 305px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 305px) {
    padding-top: 1rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 292px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 292px) {
    padding-top: 1rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 17px;
    }
    p {
      font-size: 15px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 268px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 268px) {
    padding-top: 1rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 237px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 237px) {
    padding-top: 0.1rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 15px;
    }
    p {
      font-size: 13px;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 209px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 209px) {
    padding-top: 0.1rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    h1 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;
