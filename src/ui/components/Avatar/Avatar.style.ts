import styled from "styled-components";

export const AvatarStyled = styled.div`
  padding: 1px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  line-height: 0;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
