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
`;
