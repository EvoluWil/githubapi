import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Avatar, HeaderContainer, HeaderContent } from "./Header.style";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Avatar>
          <img src="http://github.com/Willian-Rodrigues.png" alt="user" />
        </Avatar>
        <img src="logo-light.png" alt="GitHub" />
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.secondary.main}
          onColor={colors.primary.main}
        />
      </HeaderContent>
    </HeaderContainer>
  );
};
