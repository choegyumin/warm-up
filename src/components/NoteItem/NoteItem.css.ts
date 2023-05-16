import { Theme, css } from '@emotion/react';

export const root = ({ spacing }: Theme) => css`
  padding-block: ${spacing(8)};
  & + & {
    border-block-start: 1px solid #ddd;
  }
`;

export const link = css`
  color: inherit;
  text-decoration: none;
`;

export const heading = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-block: 0;
  font-size: 20px;
  line-height: 1.25em;
  font-weight: 700;
`;

export const body = ({ spacing }: Theme) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-block: ${spacing(2, 0)};
  font-size: 16px;
  line-height: 1.5em;
`;
