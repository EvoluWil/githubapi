import React from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  onClick: () => {};
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <i className="fa fa-"></i> <p>Sign in</p>
    </ButtonContainer>
  );
};
