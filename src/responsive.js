import { css } from "styled-components";


// 🍀js237.media query 👉 🧨navbar


export const mobile_380 = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const mobile_786 = (props) => {
  return css`
    @media only screen and (max-width: 786px) {
      ${props}
    }
  `;
};
