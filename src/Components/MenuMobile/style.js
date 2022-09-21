import styled from "styled-components";

export const Box = styled.div`
  display: none;

  @media screen and (min-width: 0px) and (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 48rem;
    padding-top: 2rem;
    .iconMenu nav {
      width: 2rem;
      height: 2rem;
      display: flex;
      position: absolute;
    }
  }
`;

export const ListMenu = styled.div`
  display: none;

  @media screen and (min-width: 0px) and (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding-top: 10rem;
    a{
      font-size: 3rem;
      color: #fff;
    }
  }
`;
