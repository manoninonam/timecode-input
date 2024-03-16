import { FRAMERATE } from 'smpte-timecode';

const getPreviousSecondsValue = (
  seconds: string,
  minutes: string,
  hours: string
): string => {
  if (seconds === '00' && minutes === '00' && hours === '00') return '00';
  if (seconds !== '00')
    return (parseInt(seconds) - 1).toString().padStart(2, '0');
  if (seconds === '00') return '59';
  return seconds;
};

const getPreviousMinutesValue = (minutes: string, hours: string): string => {
  if (minutes === '00' && hours === '00') return '00';
  if (minutes !== '00')
    return (parseInt(minutes) - 1).toString().padStart(2, '0');
  if (hours !== '00') return '59';
  return minutes;
};

export const getValidTimecodeArrayValue = (
  displayValueArray: string[],
  frameRate: FRAMERATE
): string[] => {
  /**
   * Values validation in case live validation is not enabled
   */
  const [originalHours, originalMinutes, originalSeconds, originalFrames] =
    displayValueArray;
  const hours = Math.min(23, parseInt(originalHours || '00'))
    .toString()
    .padStart(2, '0');
  const minutes = Math.min(59, parseInt(originalMinutes || '00'))
    .toString()
    .padStart(2, '0');
  const seconds = Math.min(59, parseInt(originalSeconds || '00'))
    .toString()
    .padStart(2, '0');
  const frames = Math.min(
    Math.ceil(frameRate - 1),
    parseInt(originalFrames || '00')
  )
    .toString()
    .padStart(2, '0');
  const isDropFrame = frameRate === 29.97 || frameRate === 59.94;
  if (!isDropFrame) return [hours, minutes, seconds, frames];

  /**
   * Drop frame: In 30 (29.97) frames counting the first two frame numbers (00 and 01)
   * shall be omitted from the count at the start of each minute
   * except minutes 00, 10, 20, 30, 40, and 50.
   * For 60 (59.94) frames the same mechanism is used,
   * but since you count each frame twice, there’re four frames dropped.
   */
  if (parseInt(minutes) % 10 === 0) return [hours, minutes, seconds, frames];

  const dropFrames =
    frameRate === 29.97 ? ['00', '01'] : ['00', '01', '02', '03'];
  if (!dropFrames.includes(frames)) return [hours, minutes, seconds, frames];

  const newFrames = frameRate === 29.97 ? '29' : '59';
  const newSeconds = getPreviousSecondsValue(seconds, minutes, hours);
  const newMinutes =
    newSeconds !== '59' ? minutes : getPreviousMinutesValue(minutes, hours);
  const newHours =
    newMinutes !== '59' || newMinutes === minutes
      ? hours
      : (parseInt(hours) - 1).toString().padStart(2, '0');

  return [newHours, newMinutes, newSeconds, newFrames];
};
