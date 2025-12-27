import { css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export const fabButtonStyles = css`
  button {
    display: inline-block;
    font-size: 24dp;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    background: #6751a1;
    color: #ffffff;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

    width: 56px;
    height: 56px;

    display: grid;
    place-items: center;
  }
  button:hover {
    background: #563d87;
  }

  button:active {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;
