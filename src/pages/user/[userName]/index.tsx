import React from "react";
import type { NextPage } from "next";
import {
  RepositoriesContainer,
  UserPageContainer,
} from "ui/styles/page/user.style";

const User: NextPage = () => {
  return (
    <UserPageContainer>
      <RepositoriesContainer></RepositoriesContainer>
    </UserPageContainer>
  );
};

export default User;
