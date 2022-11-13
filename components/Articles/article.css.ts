import { style } from '@vanilla-extract/css';
import { vars } from '../Design/themes/contract.css';

export const articleStyle = style({
  selectors: {
    '&:not(:last-child)': { marginBottom: vars.spacers[6] },
  },
});
