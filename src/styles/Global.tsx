/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import backgroundImage from '../images/background.png';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        html {
          font-family: Poppins, sans-serif;
        }

        body {
          background: url(${backgroundImage}) center no-repeat;
          background-size: cover;
          height: 100vh;
          display: grid;
          place-content: center;
          padding: 10px;
        }
      `}
    />
  );
}
