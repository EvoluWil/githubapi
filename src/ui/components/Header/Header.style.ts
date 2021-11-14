import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.navBar};
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a > img {
    width: 32px;
    height: 32px;
  }
`;
