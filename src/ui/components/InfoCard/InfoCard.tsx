import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { InfoContainer } from "./InfoCard.style";

interface InfoCardProps {
  src?: string;
  alt?: string;
  title: string | JSX.Element;
  createdAt?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  src,
  alt,
  title,
  createdAt,
}) => {
  return (
    <InfoContainer>
      <Avatar src={src} alt={alt} />
      <p>{title}</p>
      <span>{createdAt}</span>
    </InfoContainer>
  );
};
