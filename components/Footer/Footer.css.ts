import { style } from '@vanilla-extract/css';
import {atoms, colors} from "ashton-design-system";

export const footerStyle = atoms({
  backgroundColor: { darkMode: 'black', lightMode: 'medium' },
  color: 'white',
  paddingY: 8,
  textAlign: 'center',
});

export const footerLinkStyle = style({
  color: colors.white,
  textDecoration: 'underline',
  ':hover': {
    color: colors.white,
  },
});
