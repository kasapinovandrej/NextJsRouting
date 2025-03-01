import Link from "next/link";
import React from "react";
import NavLInk from "../NavLink/NavLInk";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLInk href="/news">News</NavLInk>
          </li>
          <li>
            <NavLInk href="/archive">Archive</NavLInk>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
