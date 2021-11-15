import { useAuth } from "hooks/Auth";
import { signout } from "next-auth/client";
import Link from "next/link";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { HeaderContainer } from "./Header.style";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { user } = useAuth();
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <Link href={`/${user?.userName}`}>
        <a>
          <img src="/logo-light.png" alt="GitHub" />
        </a>
      </Link>
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
        <Button onClick={() => signout()} title="Sign out" />
        <a
          href={`http://github.com/${user?.userName}`}
          rel="noreferrer"
          target="_blank"
        >
          <Avatar src={user?.image} alt={user?.name} />
        </a>
      </div>
    </HeaderContainer>
  );
};
