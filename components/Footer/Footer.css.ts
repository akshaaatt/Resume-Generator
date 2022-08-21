import { style } from '@vanilla-extract/css';
import { atoms } from '../../src/strum-design-system/sprinkles.css';
import { vars } from '../../src/strum-design-system/themes/contract.css';

export const footerStyle = atoms({
  backgroundColor: { darkMode: 'black', lightMode: 'medium' },
  color: 'white',
  paddingY: 8,
  textAlign: 'center',
});

export const footerLinkStyle = style({
  color: vars.colors.white,
  textDecoration: 'underline',
  ':hover': {
    color: vars.colors.white,
  },
});
