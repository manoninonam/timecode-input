import { Theme } from '@mui/material';
import { palette } from '../TimecodeInputStyledComponents';

export const getBackground = (
  theme: Theme,
  readOnly: boolean,
  color?: string
) => {
  if (readOnly) return palette.disabled.disabled_01;
  if (color) return 'color';
  return palette.background.primary;
};
