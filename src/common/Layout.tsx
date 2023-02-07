/** @jsxImportSource @emotion/react */

import React from "react";
import { Outlet } from "react-router-dom";
import { navBarStyle, rootContainerStyle } from "style/navBarStyle.style";

export const Layout = () => {
  return (
    <div css={rootContainerStyle}>
      <nav css={navBarStyle}>
        <a href="/">Home</a>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
