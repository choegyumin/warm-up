import { css } from '@emotion/react';

export const globals = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :where(html, body, #__next) {
    min-height: 100vh;
    min-height: 100dvh;
  }

  :where(body, #__next) {
    contain: layout;
    min-width: min-content;
  }

  :where(body) {
    margin: 0;
    tab-size: 4;
    overflow-wrap: anywhere;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;
