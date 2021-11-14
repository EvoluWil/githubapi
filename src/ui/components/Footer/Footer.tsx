import React from "react";
import { AtroMona, BorderFooter, FooterContainer } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <BorderFooter src="/effect.svg" alt="" />
      <AtroMona src="/astro-mona.svg" alt="AtroMona" />
      <a href="http://github.com" rel="noreferrer" target="_blank">
        <img src="/GitHub_Logo.png" alt="GitHub" height="30px" />
      </a>
      <a
        href="https://docs.github.com/pt/rest"
        rel="noreferrer"
        target="_blank"
      >
        Data provided by © 2021 GitHub, Inc.
      </a>
      <p>
        <a
          href="https://github.com/Willian-Rodrigues"
          target="_blank"
          rel="noreferrer"
        >
          Developed by Will
        </a>
      </p>
    </FooterContainer>
  );
};
