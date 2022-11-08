import { style } from '@vanilla-extract/css';
import {spacers} from "ashton-design-system";

export const articleStyle = style({
  selectors: {
    '&:not(:last-child)': { marginBottom: spacers[6] },
  },
});
