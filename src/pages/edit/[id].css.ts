import { Theme, css } from '@emotion/react';

export const main = ({ spacing }: Theme) => css`
  container-type: inline-size;
  max-width: 768px;
  margin-block: ${spacing(22)};
  margin-inline: auto;
  padding-inline: ${spacing(6)};
  @container (min-width: 768px) {
    margin-block: ${spacing(28)};
    padding-inline: ${spacing(8)};
  }
`;

export const footer = ({ spacing }: Theme) => css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-block-start: ${spacing(12)};
  padding-block: ${spacing(2)};
  border-block-start: 1px solid #ddd;
  @container (min-width: 768px) {
    margin-block-start: ${spacing(18)};
  }
`;

export const link = css`
  color: #333;
`;
