import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { HeaderContainer, HeaderContent } from "./HeaderHome.style";
import { Button } from "../Button/Button";
import { useAuth } from "hooks/Auth";

export const HeaderHome: React.FC = () => {
  const { setUser } = useAuth();
  const [session] = useSession();

  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name as string,
        email: session.user.email as string,
        image: session.user.image as string,
        userName: session.userName as string,
      });
    }
  }, [session]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/logo-light.png" alt="GitHub" />
        <Button onClick={() => signIn("github")} />
      </HeaderContent>
    </HeaderContainer>
  );
};
