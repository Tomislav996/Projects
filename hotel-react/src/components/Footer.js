import React from "react";

import LogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary p-12">
      <div className="container mx-auto text-white flex justify-between">
        <a href="/">
          <img src={LogoWhite} />
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
