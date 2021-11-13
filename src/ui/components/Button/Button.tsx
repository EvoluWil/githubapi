import React from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  onClick: () => {};
  icon?: string;
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, title, icon }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {icon && <i className={`fa fa-${icon}`}></i>}
      <p>{title}</p>
    </ButtonContainer>
  );
};
