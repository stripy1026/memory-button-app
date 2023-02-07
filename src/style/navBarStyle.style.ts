/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { COLORS } from "./CustomColor";

export const rootContainerStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const navBarStyle = css`
  background-color: ${COLORS.BACKGROUND_BLUE};
  height: 3rem;
  border-bottom: 0.1rem solid;

  font-size: 1rem;
  padding: 1rem;

  & > a {
    background-color: ${COLORS.BACKGROUND_BLUE};
    text-decoration: none;
    &:visited {
      color: ${COLORS.DARK_YELLOW};
    }
  }
`;
