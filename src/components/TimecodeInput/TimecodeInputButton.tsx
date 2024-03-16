import { styled } from '@mui/material';
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
    ? 'grey'
    : 'red',
  borderRadius: position === 'start' ? '4px 0px 0px 4px' : '0px 4px 4px 0px',
  height: '27px',
  ...theme.typography.body2,
  color: readOnly
    ? 'grey'
    : 'red',
  cursor: readOnly ? 'inherit' : 'pointer',

  '&:hover': {
    background: getBackground(theme, readOnly),
    borderColor: readOnly
      ? 'grey'
      : 'green'
  },
  '&:focus-visible': {
    background: getBackground(theme, readOnly),
    borderColor: 'grey'
  },
  '&:active': {
    background: getBackground(
      theme,
      readOnly,
      'grey'
    )
  },
  '&:disabled': {
    borderColor: 'grey',
    color: 'white',
    background: 'black',
    cursor: 'inherit'
  }
}));
