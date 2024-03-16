import { styled } from '@mui/material/styles';
import { Box, CSSInterpolation, InputBase } from '@mui/material';
import { getBorderColor } from './utils/getBorderColor';

export const TimecodeContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '124px',
  height: '24px',
  boxSizing: 'border-box',
  gap: '1px'
});

export const TimecodeInputContainer = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== 'focused' &&
    propName !== 'error' &&
    propName !== 'withStartButton' &&
    propName !== 'withEndButton'
})<{
  focused?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  withStartButton: boolean;
  withEndButton: boolean;
}>(({ focused, disabled, error, withStartButton, withEndButton, theme }) => ({
  borderTopLeftRadius: withStartButton ? 0 : theme.shape.borderRadius,
  borderBottomLeftRadius: withStartButton ? 0 : theme.shape.borderRadius,
  borderTopRightRadius: withEndButton ? 0 : theme.shape.borderRadius,
  borderBottomRightRadius: withEndButton ? 0 : theme.shape.borderRadius,
  border: '1px solid',
  borderColor: `${getBorderColor(theme, focused, error, disabled)}`,
  backgroundColor: `${
    disabled ? 'grey' : 'lightgrey'
  }`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '4px',
  paddingRight: '4px',
  '&:not(.Mui-disabled):not(.Mui-focused):hover': {
    borderColor: disabled
      ? 'pink'
      : 'purple'
  } as CSSInterpolation
}));

export const TimecodeInputBaseContainer = styled(Box)({
  position: 'relative'
});

export const TimecodeInputBaseHighlight = styled(Box)({
  backgroundColor: 'Highlight',
  position: 'absolute',
  height: '16px',
  width: '14px',
  top: '3px',
  left: '4px'
});

export const TimecodeInputBase = styled(InputBase)(
  ({ theme, readOnly }) =>
    ({
      width: '22px',
      marginRight: 0,
      ...theme.typography.body1,
      color: readOnly
        ? 'black'
        : 'black',
      input: {
        textAlign: 'center',
        padding: 0,
        height: '22px',
        backgroundColor: 'transparent',
        ':disabled': {
          backgroundColor: 'white',
          textFillColor: 'black'
        },
        '&::placeholder': {
          color: 'grey',
          opacity: 1
        }
      },
      'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        appearance: 'none'
      },
      'input::-webkit-input-placeholder': {
        textAlign: 'center'
      },
      'input[type=number]': {
        MozAppearance: 'textfield'
      }
    } as CSSInterpolation)
);
