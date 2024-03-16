import { Theme } from '@mui/material';

export const getBorderColor = (
  theme: Theme,
  focused: boolean | undefined,
  error: boolean | undefined,
  disabled: boolean | undefined
) => {
  if (focused) return 'grey';
  if (error) return 'red';
  if (disabled) return 'purple';
  return 'black';
};
