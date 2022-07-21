import React from "react";
import Search from "../Search/Search";
import Button from "@mui/material/Button";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header-top">
        <p>
          <strong>netflix</strong>roulette
        </p>
        <button className="add-btn">
          <strong>+ ADD MOVIE</strong>
        </button>
      </div>
      <div className="header-mid">FIND YOUR MOVIE</div>

      <Search />
    </div>
  );
}

export default Header;
