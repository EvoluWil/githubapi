import styled from "styled-components";

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: #fff;
    margin: 0;
    margin-right: auto;
  }

  p {
    margin-right: auto;
    margin-top: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
