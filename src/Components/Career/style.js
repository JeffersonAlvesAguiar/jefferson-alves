import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;
  color: white;
  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h1 {
    -webkit-animation: h1 10s ease-in infinite both;
    animation: h1 10s ease-in infinite both;

    @-webkit-keyframes h1 {
      0% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
          0 0 60px rgba(255, 255, 255, 0.45),
          0 0 110px rgba(255, 255, 255, 0.25),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      13.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
          0 0 60px rgba(255, 255, 255, 0.45),
          0 0 110px rgba(255, 255, 255, 0.25),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      14% {
        opacity: 0;
        text-shadow: none;
      }
      14.9% {
        opacity: 0;
        text-shadow: none;
      }
      15% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      22.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      23% {
        opacity: 0;
        text-shadow: none;
      }
      24.9% {
        opacity: 0;
        text-shadow: none;
      }
      25% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      34.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      35% {
        opacity: 0;
        text-shadow: none;
      }
      39.9% {
        opacity: 0;
        text-shadow: none;
      }
      40% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35);
      }
      42.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35);
      }
      43% {
        opacity: 0;
        text-shadow: none;
      }
      44.9% {
        opacity: 0;
        text-shadow: none;
      }
      45% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      54.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      55% {
        opacity: 0;
        text-shadow: none;
      }
      69.4% {
        opacity: 0;
        text-shadow: none;
      }
      69.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      69.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      70% {
        opacity: 0;
        text-shadow: none;
      }
      79.4% {
        opacity: 0;
        text-shadow: none;
      }
      79.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
      }
      80% {
        opacity: 0;
        text-shadow: none;
      }
      89.8% {
        opacity: 0;
        text-shadow: none;
      }
      89.9% {
        opacity: 1;
        text-shadow: none;
      }
      90% {
        opacity: 0;
        text-shadow: none;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes h1 {
      0% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
          0 0 60px rgba(255, 255, 255, 0.45),
          0 0 110px rgba(255, 255, 255, 0.25),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      13.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
          0 0 60px rgba(255, 255, 255, 0.45),
          0 0 110px rgba(255, 255, 255, 0.25),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      14% {
        opacity: 0;
        text-shadow: none;
      }
      14.9% {
        opacity: 0;
        text-shadow: none;
      }
      15% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      22.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      23% {
        opacity: 0;
        text-shadow: none;
      }
      24.9% {
        opacity: 0;
        text-shadow: none;
      }
      25% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      34.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      35% {
        opacity: 0;
        text-shadow: none;
      }
      39.9% {
        opacity: 0;
        text-shadow: none;
      }
      40% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35);
      }
      42.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35);
      }
      43% {
        opacity: 0;
        text-shadow: none;
      }
      44.9% {
        opacity: 0;
        text-shadow: none;
      }
      45% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      54.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      55% {
        opacity: 0;
        text-shadow: none;
      }
      69.4% {
        opacity: 0;
        text-shadow: none;
      }
      69.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      69.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      70% {
        opacity: 0;
        text-shadow: none;
      }
      79.4% {
        opacity: 0;
        text-shadow: none;
      }
      79.9% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
      }
      80% {
        opacity: 0;
        text-shadow: none;
      }
      89.8% {
        opacity: 0;
        text-shadow: none;
      }
      89.9% {
        opacity: 1;
        text-shadow: none;
      }
      90% {
        opacity: 0;
        text-shadow: none;
      }
      100% {
        opacity: 0;
      }
    }
  }

  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    width: 30rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div`
  width: 13rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  background-color: #18181b;

  -webkit-animation: Card 10s ease-in 2s infinite both;
  animation: Card 4s ease-in 2s infinite both;

  @-webkit-keyframes Card {
    0% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
    50% {
      -webkit-transform: scale(0.5) rotateX(-180deg);
      transform: scale(0.5) rotateX(-180deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(-360deg);
      transform: scale(1) rotateX(-360deg);
    }
  }
  @keyframes Card {
    0% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
    50% {
      -webkit-transform: scale(0.5) rotateX(-180deg);
      transform: scale(0.5) rotateX(-180deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(-360deg);
      transform: scale(1) rotateX(-360deg);
    }
  }

  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    width: 10rem;
    height: 9rem;
  }
`;

export const Icon = styled.div`
  width: 13rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  .icon {
    width: 13rem;
    height: 4rem;
  }
  @media only screen and (min-width: 712px) and (max-width: 1024px) {
    width: 7rem;
    height: 3rem;
  }
`;

export const Title = styled.div`
  width: 9rem;
  height: 2rem;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0.5rem;
`;

export const ProgressBar = styled.div`
  width: 9rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  span {
    width: 9rem;
    height: 0.5rem;
    background-color: aliceblue;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const ProgressHtml = styled.div`
  width: 7rem;
  height: 0.5rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: aqua;
`;

export const ProgressCss = styled.div`
  width: 7rem;
  height: 0.5rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: aqua;
`;

export const ProgressStyleComponents = styled.div`
  width: 6rem;
  height: 0.5rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: aqua;
`;

export const ProgressJavaScript = styled.div`
  width: 6rem;
  height: 0.5rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: aqua;
`;

export const ProgressReactJs = styled.div`
  width: 6rem;
  height: 0.5rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: aqua;
`;
