import styled, { css } from "styled-components";

interface TagColorProps {
  size?: number;
  color?: string;
}
export const ColorContainer = styled.section<TagColorProps>`
  width: 1rem;
  height: 1rem;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}

  ${({ color }) => css`
    background: ${color};
  `}
`;
