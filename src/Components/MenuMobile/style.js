import styled from "styled-components";

export const Box = styled.div`
  display: none;

  @media screen and (min-width: 0px) and (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    .iconMenu {
      width: 2rem;
      height: 2rem;
      right: 2rem;
      top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 20000;
      color: #fff;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      gap: 2rem;
      background-image: linear-gradient(
        -225deg,
        #ac32e4 0%,
        #7918f2 48%,
        #4801ff 100%
      );
      a {
        font-size: 3rem;
        color: #fff;
      }
    }
  }
`;
