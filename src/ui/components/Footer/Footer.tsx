import React from "react";
import { AtroMona, BorderFooter, FooterContainer } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <BorderFooter src="/effect.svg" alt="" />
      <AtroMona src="/astro-mona.svg" alt="AtroMona" />
      <img src="/GitHub_Logo.png" alt="GitHub" height="30px" />
      <p>Data provided by © 2021 GitHub, Inc.</p>
      <p>
        Developed by{" "}
        <a
          href="https://github.com/Willian-Rodrigues"
          target="_blank"
          rel="noreferrer"
        >
          Will
        </a>
      </p>
    </FooterContainer>
  );
};
