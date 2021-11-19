import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.navBar};
  padding: 1rem;
  margin-top: auto;

  a {
    color: #fff;
  }

  @media (max-width: 700px) {
    margin-top: auto;
    flex-direction: column;
    gap: 1rem;
    height: auto;
  }
`;
