import styled from "styled-components";

export const Box = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 3rem;
  h1 {
    font-size: 2rem;
    color: white;
    display: flex;
    position: absolute;
    left: 4rem;
  }
  a {
    font-size: 2rem;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    font-size: 2.01rem;
  }
  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    h1 {
      font-size: 2rem;
      color: white;
      position: relative;
      left: 0rem;
    }
    a {
      display: none;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 711px) {
    height: 1.3rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    h1 {
      font-size: 0.9rem;
      color: white;
      position: relative;
      left: 0rem;
    }
    a {
      display: none;
    }
  }
`;
