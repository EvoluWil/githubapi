import styled from "styled-components";

export const HomeContainer = styled.main`
  background-image: linear-gradient(
    120deg,
    #320070 0%,
    #13253b 48.96%,
    #003370 100%
  );
`;

export const HomeContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
  overflow-x: hidden;
  @media (max-width: 1000px) {
    margin-top: 3rem;
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 42vw 1fr;
  align-items: center;

  img {
    width: 98%;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 500px) {
    img {
      object-fit: cover;
      width: 200%;
      margin-left: -50%;
      margin-top: 2rem;
    }
  }
`;

export const TextContent = styled.div`
  h1 {
    font-size: 4.5rem;
    color: #fff;
  }
  p {
    font-size: 1.5rem;
    color: #8193b2;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const SecondSection = styled.div`
  border-top: 1px solid #8193b2;
  padding: 0 1.5rem;
  width: 100%;
  height: 4rem;
  margin: 1rem auto 5rem;
  color: #fff;

  div {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    width: 80%;
  }

  @media (max-width: 1000px) {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    border: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 6rem;

    div {
      width: 100%;
      margin: 0;
      justify-content: space-evenly;

      &:nth-child(4) {
        display: none;
      }
    }
  }
`;
