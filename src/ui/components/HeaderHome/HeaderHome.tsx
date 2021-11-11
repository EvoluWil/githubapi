import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Avatar, HeaderContainer, HeaderContent } from "./HeaderHome.style";
import { Button } from "../Button/Button";

export const HeaderHome: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="logo-light.png" alt="GitHub" />
        <Button />
      </HeaderContent>
    </HeaderContainer>
  );
};
