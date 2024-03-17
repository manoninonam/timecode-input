import { styled } from '@mui/material';
import { palette } from '../../utils/palette';
import { getBackground } from './utils/getBackground';

interface TimecodeInputButtonProps {
  position: 'start' | 'end';
  readOnly?: boolean;
}

export const TimecodeInputButton = styled('button', {
  shouldForwardProp: (propName) =>
    propName !== 'position' && propName !== 'readOnly'
})<TimecodeInputButtonProps>(({ theme, position, readOnly = false }) => ({
  background: getBackground(theme, readOnly),
  outline: 'none',
  border: '1px solid',
  borderColor: readOnly
    ? palette.disabled.disabled_01
    : palette.border.primary,
  borderRadius: position === 'start' ? '4px 0px 0px 4px' : '0px 4px 4px 0px',
  height: '27px',
  ...theme.typography.body2,
  color: readOnly
    ? palette.text.disabled
    : palette.text.primary,
  cursor: readOnly ? 'inherit' : 'pointer',

  '&:hover': {
    background: getBackground(theme, readOnly),
    borderColor: readOnly
      ? palette.disabled.disabled_02
      : palette.actions.hover
  },
  '&:focus-visible': {
    background: getBackground(theme, readOnly),
    borderColor: palette.actions.focus
  },
  '&:active': {
    background: getBackground(
      theme,
      readOnly,
      palette.actions.active
    )
  },
  '&:disabled': {
    borderColor: palette.disabled.disabled_02,
    color: palette.disabled.disabled_02,
    background: palette.disabled.disabled_01,
    cursor: 'inherit'
  }
}));
