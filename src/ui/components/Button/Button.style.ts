import styled from "styled-components";

export const ButtonContainer = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 6px;
  cursor: pointer;
  gap: 0.25rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  p {
    font-size: 16px;
  }
`;
