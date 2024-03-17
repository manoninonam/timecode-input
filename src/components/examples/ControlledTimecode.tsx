
import TimecodeInput from '../TimecodeInput/TimecodeInput'
import { TimecodeInputButton } from '../TimecodeInput/TimecodeInputButton'
import { useState } from 'react';

export const ControlledTimecode = () => {
  const [value, setValue] = useState<string>();
  const handleButtonClick = () => {
    setValue('00:54:32;10');
  };
  
  const onInputEnd = (timecode: string | undefined) => {
    setValue(timecode);
  };
  return (
    <TimecodeInput
      value={value}
      defaultValue={'00:00:00;00'}
      frameRate={29.97}
      endButton={
        <TimecodeInputButton position='end' onClick={handleButtonClick} >
          Go
        </TimecodeInputButton>
      }
      onInputEnd={onInputEnd}
    />
  );
};