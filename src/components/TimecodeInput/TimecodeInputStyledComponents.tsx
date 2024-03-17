import { styled } from '@mui/material/styles';
import { Box, CSSInterpolation, InputBase } from '@mui/material';
import { getBorderColor } from './utils/getBorderColor';

export const palette = {
  background: {
    primary: '#0F1120',
    secondary: '#1F2237',
    tertiary: '#06060D'
  },
  border: {
    primary: '#626472',
    // secondary: '#626472',
  },
  text: {
    primary: '#E8E8EA',
    secondary: '#93959E',
    disabled: '#525465',
    placeholder: '#444657',
  },
  disabled: {
    disabled_01: '#363952',
    disabled_02: '#525465'
  },
  actions: {
    hover: '#333548',
    focus: '#CCBC87',
    active: '#525465',
    error: ''
  }

}

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
    disabled ? palette.disabled.disabled_01 : palette.background.primary
  }`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '4px',
  paddingRight: '4px',
  '&:not(.Mui-disabled):not(.Mui-focused):hover': {
    borderColor: disabled
      ? palette.disabled.disabled_02
      : palette.border.primary
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
        ? palette.text.secondary
        : palette.text.primary,
      input: {
        textAlign: 'center',
        padding: 0,
        height: '22px',
        backgroundColor: 'transparent',
        ':disabled': {
          backgroundColor: palette.disabled.disabled_01,
          textFillColor: palette.disabled.disabled_02
        },
        '&::placeholder': {
          color: palette.text.placeholder,
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
