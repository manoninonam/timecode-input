import Timecode from 'smpte-timecode';
import { isValidSMPTETimeCode } from './isValidSMPTETimeCode';

export const convertTimecodeToArray = (timecode?: string) => {
  if (typeof timecode === 'string' && isValidSMPTETimeCode.test(timecode)) {
    let newTimecode = Timecode();
    try {
      newTimecode = Timecode(timecode);
    } catch (e) {
      return ['', '', '', ''];
    }
    return [
      String(newTimecode?.hours).padStart(2, '0'),
      String(newTimecode?.minutes).padStart(2, '0'),
      String(newTimecode?.seconds).padStart(2, '0'),
      String(newTimecode?.frames).padStart(2, '0')
    ];
  } else return ['', '', '', ''];
};
