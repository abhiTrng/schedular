import { Global, css } from "@emotion/react";

const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html,
      body,
      #root {
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
      }
    `}
  />
);

export default GlobalStyle;
