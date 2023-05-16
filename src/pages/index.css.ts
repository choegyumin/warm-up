import { Theme, css } from '@emotion/react';

export const main = ({ spacing }: Theme) => css`
  container-type: inline-size;
  max-width: 768px;
  margin-block: ${spacing(12)};
  margin-inline: auto;
  padding-inline: ${spacing(6)};
  @container (min-width: 768px) {
    margin-block: ${spacing(18)};
    padding-inline: ${spacing(8)};
  }
`;
