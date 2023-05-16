import { Theme, css } from '@emotion/react';

export const root = ({ spacing }: Theme) => css`
  display: flex;
  flex-direction: column;
  width: stretch;
  max-width: 768px;
  margin: 0;
  padding: 0;
  gap: ${spacing(2)};
  list-style: none;
`;
