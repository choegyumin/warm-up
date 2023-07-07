import { css } from '@emotion/react';

export const button = css`
  color: blue;
  font-weight: bold;
`;

export const Button = () => {
  return (
    <button css={button} onClick={() => alert('boop')}>
      Boop
    </button>
  );
};
Button.displayName = 'Button';
