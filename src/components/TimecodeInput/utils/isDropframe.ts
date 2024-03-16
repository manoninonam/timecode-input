import { FRAMERATE } from 'smpte-timecode';

export const isDropFrame = (
  framerate: FRAMERATE,
  dropFrame?: boolean
): boolean =>
  typeof dropFrame === 'boolean'
    ? dropFrame
    : framerate === 29.97 || framerate === 59.94;
