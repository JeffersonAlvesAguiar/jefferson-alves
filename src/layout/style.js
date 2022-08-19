import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    gap: 5rem;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18181b;
`;

export const BoxCareer = styled.div`
  max-width: 80rem;
  max-height: 30rem;
  background-color: #0e0e10;
  border-radius: 30px;
  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    max-width: 40rem;
    max-height: 60rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 711px) {
    max-width: 19rem;
    max-height: 27rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const BoxSkills = styled.div`
  display: none;
  width: 98%;
  height: 80vh;
  background-color: #0e0e10;
  border-radius: 30px;
`;

export const BoxPortfolio = styled.div`
  display: none;
  width: 98%;
  height: 80vh;
  background-color: #0e0e10;
  border-radius: 30px;
`;
