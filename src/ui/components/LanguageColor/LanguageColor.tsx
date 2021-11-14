import React from "react";
import { ColorContainer } from "./LanguageColor.style";

interface TagLanguageColorProps {
  color?: string;
  size?: number;
}

export const TagLanguageColor: React.FC<TagLanguageColorProps> = ({
  color,
  size,
}) => {
  return <ColorContainer color={color} size={size} />;
};
