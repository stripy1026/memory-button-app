/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { COLORS } from "style/CustomColor";

export const homeStyle = css`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_BLUE};
  height: 100vh;
  row: 100vw;
  overflow: scroll;
`;

export const homeTitleStyle = css`
  color: ${COLORS.DARK_YELLOW};
  text-align: center;
  font-size: 2rem;
`;

export const diffButtonStyle = css`
  &:nth-of-type(n) {
    background-color: ${COLORS.DARK_YELLOW};
`;

export const homeTextStyle = css`
  color: ${COLORS.WHITE_YELLOW};
  display: flex;
  height: 3rem;
  & > span {
    margin: 2rem;
  }
`;
