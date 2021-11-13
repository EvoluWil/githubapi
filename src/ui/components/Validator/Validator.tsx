import { useAuth } from "hooks/Auth";
import { useSession } from "next-auth/client";
import React, { ReactNode, useEffect } from "react";

interface ValidatorProps {
  children: ReactNode;
}
export const Validator: React.FC<ValidatorProps> = ({ children }) => {
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

  return <>{children}</>;
};
