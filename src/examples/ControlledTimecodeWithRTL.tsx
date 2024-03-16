
import TimecodeInput from '../components/TimecodeInput/TimecodeInput';
import { TimecodeInputButton } from '../components/TimecodeInput/TimecodeInputButton';
import { useState } from 'react';


export const ControlledTimecodeWithRTL = () => {
  const [value, setValue] = useState<string>();
  const handleButtonClick = () => {
    setValue('00:54:32;10');
  };
  const onInputEnd = (timecode: string | undefined) => {
    setValue(timecode);
  };
  return (
    <TimecodeInput
      rtl={true}
      value={value}
      defaultValue={'00:00:00;00'}
      endButton={
        <TimecodeInputButton position='end' onClick={handleButtonClick}>
          Go
        </TimecodeInputButton>
      }
      frameRate={29.97}
      onInputEnd={onInputEnd}
    />
  );
};