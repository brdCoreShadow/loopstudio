// GlobalStyles.tsx
import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Alata";
        src: url("./assets/fonts/Alata/Alata-Regular.ttf") format("truetype");
      }

      @font-face {
        font-family: "Josephine";
        src: url("") format("truetype");
        font-weight: 100 900;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: "Josephine", sans-serif;
        background: #000;
        color: #fff;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      ul,
      ol,
      nav {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      input {
        box-sizing: border-box;
        box-shadow: none;
        outline: none;
      }

      img {
        display: block;
        box-sizing: border-box;
        max-width: 100%;
        height: auto;
      }

      button {
        padding: 0;
        border: none;
      }
    `}
  />
);

export default GlobalStyles;
