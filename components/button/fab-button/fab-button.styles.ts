import { css } from 'lit';

export const fabButtonStyles = css`

button {
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background: rgba(103, 80, 164, 1);
  width: 104px;
  height: 56px;
}

button:hover {
  background: rgba(79, 55, 138, 1);
}

button:active {
  opacity: 0.8;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
.label {
  color: #d9d9d9;
  font-size: 1.4rem;
  white-space: nowrap;
  pointer-events: none;
}

`;
