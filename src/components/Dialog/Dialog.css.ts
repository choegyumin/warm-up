import { Theme, css } from '@emotion/react';

export const root = css`
  width: stretch;
  max-width: 768px;
  margin: auto;
  padding: 0;
  border: 0;
  outline: 0;
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.25);
  &::backdrop {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const close = ({ spacing }: Theme) => css`
  position: absolute;
  z-index: 1;
  top: ${spacing(3)};
  right: ${spacing(3)};
  width: 32px;
  aspect-ratio: 1;
  color: #888;
  padding: 0;
  border: 0;
  background: none;
  font-size: 24px;
  outline: 0;
  &:hover,
  &:focus-visible {
    color: #000;
  }
`;

export const content = ({ spacing }: Theme) => css`
  container-type: inline-size;
  padding-block: ${spacing(10)};
  padding-inline: ${spacing(6)};
  @container (min-width: 768px) {
    padding-block: ${spacing(12)};
    padding-inline: ${spacing(8)};
  }
`;
