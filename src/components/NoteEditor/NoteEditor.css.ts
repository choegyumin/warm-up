import { Theme, css } from '@emotion/react';

export const root = css``;

export const heading = css`
  overflow: hidden;
  display: block;
  width: stretch;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-size: 32px;
  line-height: 1.25em;
  font-weight: 700;
  outline: 0;
  resize: none;
  @container (min-width: 768px) {
    font-size: 42px;
  }
`;

export const body = ({ spacing }: Theme) => css`
  overflow: hidden;
  display: block;
  width: stretch;
  border: 0;
  margin-block-start: ${spacing(6)};
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5em;
  outline: 0;
  resize: none;
  @container (min-width: 768px) {
    margin-block-start: ${spacing(8)};
    font-size: 18px;
  }
`;
