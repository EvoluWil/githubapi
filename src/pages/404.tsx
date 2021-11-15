import { NextPage } from "next";
import React from "react";
import { Image404Container } from "ui/styles/page/404";

const Error: NextPage = () => {
  return (
    <Image404Container>
      <img src="/404.png" alt="Error" />
    </Image404Container>
  );
};
export default Error;
