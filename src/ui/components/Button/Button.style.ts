import styled from "styled-components";

export const ButtonContainer = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 6px;
  cursor: pointer;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
  }

  p {
    font-size: 16px;
    color: #fff;
  }
`;
