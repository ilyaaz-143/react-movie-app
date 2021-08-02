import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wraper, Content, LogoImg, TMDBLogoImg } from "./Header.style";
function Header() {
  return (
    <Wraper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wraper>
  );
}

export default Header;
