import React from "react";
import { signIn } from "next-auth/client";
import { HeaderContainer, HeaderContent } from "./HeaderHome.style";
import { Button } from "../Button/Button";

export const HeaderHome: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <a href="http://github.com" rel="noreferrer" target="_blank">
          <img src="/logo-light.png" alt="GitHub" />
        </a>
        <Button onClick={() => signIn("github")} title="Sing in" />
      </HeaderContent>
    </HeaderContainer>
  );
};
