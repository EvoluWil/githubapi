import React from "react";
import { Loader, LoadingContainer } from "./Loading.style";

interface InfoHomeCardProps {
  img?: string;
  size?: string;
}

export const Loading: React.FC<InfoHomeCardProps> = ({ img, size }) => {
  return (
    <LoadingContainer>
      {img ? (
        <>
          <img src={img} alt="Loading" width={`${size}px`} />
          <p>One moment please...</p>
        </>
      ) : (
        <Loader>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Loader>
      )}
    </LoadingContainer>
  );
};
