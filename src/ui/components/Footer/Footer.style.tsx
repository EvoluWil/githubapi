import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 700px) {
    margin-top: 200px;
  }
`;
