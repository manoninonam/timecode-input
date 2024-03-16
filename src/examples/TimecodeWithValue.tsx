
import { Box, Stack } from '@mui/material'
import TimecodeInput from '../components/TimecodeInput/TimecodeInput';
import { useState } from 'react';


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
          background: 'grey',
          letterSpacing: '1px',
          padding: '0 10px',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'grey'
        }}
      >
        {value || '--:--:--;--'}
      </Box>
    </Stack>
  );
};
