import { useAuth } from "hooks/Auth";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Avatar } from "../Avatar/Avatar";
import { HeaderContainer } from "./Header.style";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { user } = useAuth();
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <img src="/logo-light.png" alt="GitHub" />
      <div>
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
        <Avatar src={user?.image} alt={user?.name} />
      </div>
    </HeaderContainer>
  );
};
