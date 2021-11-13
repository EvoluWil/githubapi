import React from "react";
import { AvatarStyled } from "./Avatar.style";

interface AvatarProps {
  src?: string;
  alt?: string;
}
export const Avatar: React.FC<AvatarProps> = ({ src, alt = "Usuário" }) => {
  return (
    <AvatarStyled>
      <img src={src || "/default-avatar.png"} alt={alt} />
    </AvatarStyled>
  );
};
