import styled from "styled-components";

export const Box = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 3rem;
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
    a {
    font-size: 1.5rem;
  }
}
  `;
