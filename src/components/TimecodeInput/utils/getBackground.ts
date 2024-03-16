import { Theme } from '@mui/material';

export const getBackground = (
  theme: Theme,
  readOnly: boolean,
  color?: string
) => {
  if (readOnly) return 'blue';
  if (color) return 'color';
  return 'black';
};
