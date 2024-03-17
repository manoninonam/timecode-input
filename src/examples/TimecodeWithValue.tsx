
import { Box, Stack } from '@mui/material'
import TimecodeInput from '../components/TimecodeInput/TimecodeInput';
import { useState } from 'react';
import { palette } from '../components/TimecodeInput/TimecodeInputStyledComponents';


export const TimecodeWithValue = () => {
  const [value, setValue] = useState<string>();
  const onInputEnd = (timecode: string | undefined) => {
    setValue(timecode);
  };
  return (
    <Stack direction='row' gap={5}>
      <TimecodeInput
        value={value}
        defaultValue={'00:00:00;00'}
        frameRate={29.97}
        onInputEnd={onInputEnd}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: palette.disabled.disabled_01,
          letterSpacing: '1px',
          padding: '0 10px',
          borderRadius: '8px',
          color: palette.text.primary,
          border: '1px solid',
          borderColor: palette.disabled.disabled_02,
        }}
      >
        {value || '--:--:--;--'}
      </Box>
    </Stack>
  );
};
