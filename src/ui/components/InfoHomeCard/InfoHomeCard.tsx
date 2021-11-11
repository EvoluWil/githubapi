import React from "react";
import { InfoCardContainer } from "./InfoHomeCard.style";

interface InfoHomeCardProps {
  title: string;
  subtitle: string;
}

export const InfoHomeCard: React.FC<InfoHomeCardProps> = ({
  title,
  subtitle,
}) => {
  return (
    <InfoCardContainer>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </InfoCardContainer>
  );
};
