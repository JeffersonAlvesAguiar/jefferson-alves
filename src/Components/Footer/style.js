import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30rem;
  color: #ffffff;

  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
`;
export const Box = styled.div`
  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a{
      color: #fff;
    }
  }
`;
