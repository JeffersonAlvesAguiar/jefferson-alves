import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: #ffffff;

  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  h1 {
    position: absolute;
    left: 10rem;
    font-size: 22px;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }

  -webkit-animation: Box 2s ease-in both;
  animation: Box 2s ease-in both;

  @-webkit-keyframes Box {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
  @keyframes Box {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }

  .iconMenu {
    display: none;
  }

  //-----------------------------------------
  //STYLE RESPONSIVE 0px X 912px
  //-----------------------------------------
  @media screen and (min-width: 0px) and (max-width: 912px) {
    a {
      display: none;
    }
    h1 {
      left: 1.25rem;
    }
    .iconMenu {
      width: 2rem;
      height: 2rem;
      display: flex;
      position: absolute;
      right: 1.25rem;
    }
  }
`;
