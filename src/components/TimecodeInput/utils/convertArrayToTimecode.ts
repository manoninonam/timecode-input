import Timecode, { FRAMERATE } from 'smpte-timecode';

export const convertArrayToTimecode = (
  displayValueArray: string[],
  frameRate: FRAMERATE
) => {
  const [hours, minutes, seconds, frames] = displayValueArray;
  const newTimecode = new Timecode(0, frameRate);
  newTimecode.hours = +hours;
  newTimecode.minutes = +minutes;
  newTimecode.seconds = +seconds;
  newTimecode.frames = +frames;
  try {
    Timecode(newTimecode);
  } catch (e) {
    return undefined;
  }
  return newTimecode.toString();
};
