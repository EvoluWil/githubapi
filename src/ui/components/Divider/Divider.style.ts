import styled from "styled-components";

export const DividerStyled = styled.hr`
  display: flex;
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
