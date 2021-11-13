import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
