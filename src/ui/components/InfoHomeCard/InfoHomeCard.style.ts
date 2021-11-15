import styled from "styled-components";

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
    margin-right: auto;
  }

  p {
    margin-right: auto;
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 1rem;
      text-align: center;
      width: 100%;
    }

    p {
      text-align: center;
      width: 100%;
    }
  }
`;
