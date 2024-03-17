import { Theme } from '@mui/material';
import { palette } from '../TimecodeInputStyledComponents';

export const getBorderColor = (
  theme: Theme,
  focused: boolean | undefined,
  error: boolean | undefined,
  disabled: boolean | undefined
) => {
  if (focused) return palette.actions.focus;
  if (error) return palette.actions.error;
  if (disabled) return palette.disabled.disabled_02;
  return palette.border.primary;
};
