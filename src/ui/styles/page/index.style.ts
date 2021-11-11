import styled from "styled-components";

export const HomeContainer = styled.main`
  background-image: linear-gradient(
    120deg,
    #320070 0%,
    #13253a 21.35%,
    #13253b 48.96%,
    #13253b 78.65%,
    #003370 100%
  );
`;

export const HomeContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;

  hr {
    display: block;
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
`;

export const TextContent = styled.div`
  h1 {
    font-size: 72px;
    color: #fff;
  }
  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SecondSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.text.primary};
  padding: 0 24px;
  width: 100%;
  height: 63px;
  margin: 16px auto 80px;

  div {
    padding: 12px 0;
    display: flex;
    align-items: center;
    column-gap: 48px;
  }
`;
