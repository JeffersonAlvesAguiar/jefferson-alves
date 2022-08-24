import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
`;

export const Box = styled.div`
  width: 11rem;
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    -webkit-animation: span 1.5s ease-in infinite both;
    animation: span 1.5s ease-in infinite both;

    @-webkit-keyframes span {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes span {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }
  .icon {
    width: 6rem;
    height: 6rem;
    color: #ffffff;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    color: #ffffff;
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 591px
  //-------------------------------

  @media screen and (min-width: 0px) and (max-width: 591px) {
    width: 5rem;
    height: 5rem;
    .icon {
      width: 4rem;
      height: 4rem;
    }
    p {
      font-size: 1rem;
    }
  }

  //-------------------------------
  //STYLE RESPONSIVE 0px X 191px
  //-------------------------------
  @media screen and (min-width: 0px) and (max-width: 191px) {
    width: 4rem;
    height: 4rem;
    .icon {
      width: 3rem;
      height: 3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
