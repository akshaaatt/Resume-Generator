import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
  },
  backgroundColor: "#FFFFFF",
  color: "#000000",
});
