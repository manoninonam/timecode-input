import { OutlinedInputProps, Typography } from '@mui/material';
import {
  TimecodeContainer,
  TimecodeInputBase,
  TimecodeInputBaseContainer,
  TimecodeInputBaseHighlight,
  TimecodeInputContainer
} from './TimecodeInputStyledComponents';
import { palette } from '../../utils/palette';
import {
  ChangeEvent,
  Fragment,
  KeyboardEvent as ReactKeyboardEvent,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react';
import Timecode, { FRAMERATE } from 'smpte-timecode';
import {
  convertArrayToTimecode,
  convertTimecodeToArray,
  getValidTimecodeArrayValue,
  isDropFrame,
  isInvalidChar,
  isNumber,
  limitMaxCharacters
} from './utils';

export type TimecodeUniqueProps = {
  /**
   * The framerate of the source for the Timecode.
   */
  frameRate: FRAMERATE;
  /**
   * Passes a function that happens when the user finishes entering the timecode. It's comparable to the onChange event, but due to the nature of the Timecode library, it's necessary to only update after onBlur.
   */
  onInputEnd?: (value: string | undefined) => void;
  /**
   * In this case this prop sets the value for the timecode.
   */
  value?: string;
  /**
   * In this case defaultValue sets the value the timecode changes to when activating.
   */
  defaultValue?: string;
  /**
   * Set a content of input start from Right to Left
   * @default false
   */
  rtl?: boolean;
  /**
   * button element rendered at the beginning of the input.
   */
  startButton?: ReactNode;
  /**
   * button element rendered at the end of the input.
   */
  endButton?: ReactNode;
};

export type TimecodeInputProps = Pick<
  OutlinedInputProps,
  | 'aria-describedby'
  | 'classes'
  | 'defaultValue'
  | 'disabled'
  | 'disableInjectingGlobalStyles'
  | 'error'
  | 'inputComponent'
  | 'inputProps'
  | 'readOnly'
  | 'required'
  | 'sx'
  | 'type'
  | 'value'
> &
  TimecodeUniqueProps;

const TimecodeInput = ({
  onInputEnd,
  frameRate,
  disabled,
  readOnly,
  value,
  defaultValue,
  error,
  rtl = false,
  startButton,
  endButton,
  ...rest
}: TimecodeInputProps) => {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const framesRef = useRef<HTMLInputElement>(null);
  const inputRefArray = useMemo(
    () => [hoursRef, minutesRef, secondsRef, framesRef],
    [hoursRef, minutesRef, secondsRef, framesRef]
  );
  const framesIndex = inputRefArray.length - 1;
  const secondsIndex = inputRefArray.length - 2;
  const [keydownCount, setKeydownCount] = useState<number>(0);
  const [isRTLMode, setIsRTLMode] = useState<boolean>(rtl);
  const [focused, setFocused] = useState<boolean>(false);
  const [displayValueArray, setDisplayValueArray] = useState<string[]>(
    convertTimecodeToArray(value)
  );
  const [mimicSelectAllInputs, setMimicSelectAllInputs] =
    useState<boolean>(false);

  const defaultIndexInput = rtl ? 3 : 0;

  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    setDisplayValueArray(convertTimecodeToArray(value));
  }

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newValue = isRTLMode
      ? e.target.value.slice(-1)
      : handleInputValidation(
          limitMaxCharacters(e.target.value, 2),
          index,
          frameRate
        );
    handleInputUpdate(newValue, index);
    if (keydownCount >= 2) {
      focusAndSelectNextInput(index);
    }
  };

  const focusAndSelectNextInput = (index: number) => {
    const newIndex = isRTLMode
      ? framesIndex
      : Math.min(inputRefArray.length - 1, index + 1);
    inputRefArray[newIndex].current?.select();
  };

  const placeholderActive = () => {
    const isAnEmptyString = (element: string) => {
      return element === '';
    };
    return displayValueArray.every(isAnEmptyString);
  };

  const activateInputs = () => {
    if (placeholderActive()) {
      setDisplayValueArray(
        convertTimecodeToArray(
          defaultValue ? defaultValue : Timecode(0, frameRate).toString()
        )
      );
    }
  };

  const selectAllInputs = () => {
    if (rtl) {
      setIsRTLMode(true);
      inputRefArray[3].current?.select();
    } else {
      inputRefArray[0].current?.select();
    }

    setMimicSelectAllInputs(true);
  };

  const handleInputValidation = (
    newDisplayValue: string,
    index: number,
    frameRate: FRAMERATE
  ) => {
    const inputLimit = [23, 59, 59, Math.ceil(frameRate - 1)];
    if (+newDisplayValue > inputLimit[index]) {
      return String(inputLimit[index]);
    } else return newDisplayValue;
  };

  const handleInputSwitch = (index: number) => {
    setKeydownCount(keydownCount + 1);
    if (rtl && index !== framesIndex) {
      setIsRTLMode(false);
    }
  };

  const handleInputUpdate = (newValue: string, index: number) => {
    let newDisplayValueArray: string[] = [...displayValueArray];

    if (!rtl) {
      newDisplayValueArray = displayValueArray.map((inputValue, i) => {
        if (i === index) {
          if (newValue === 'Na') {
            return '00';
          }
          return newValue.padStart(2, '0');
        } else return displayValueArray[i];
      });
    } else if (isRTLMode) {
      if (keydownCount > 2) {
        newDisplayValueArray[0] = displayValueArray[1];
        newDisplayValueArray[1] = displayValueArray[2];
        newDisplayValueArray[2] = displayValueArray[3];
        newDisplayValueArray[3] = newValue.padStart(2, '0');
        setKeydownCount(1);
      } else {
        newDisplayValueArray[3] = (displayValueArray[3] + newValue).slice(-2);
      }
    } else {
      newDisplayValueArray[index] = newValue.padStart(2, '0');
      setKeydownCount(keydownCount + 1);
    }

    setDisplayValueArray(newDisplayValueArray);
  };

  const handleSelect = (e: React.FocusEvent) => {
    const startInput = displayValueArray[defaultIndexInput];
    const focusFromTimecodeInput = inputRefArray.some(
      (input) => input.current === e.relatedTarget
    );
    if (!focusFromTimecodeInput && startInput === '') {
      return inputRefArray[defaultIndexInput].current?.select();
    } else return null;
  };

  const handleFocus = () => {
    const active = inputRefArray.find(
      (element) => document.activeElement === element.current
    );

    setFocused(!!active);
  };

  const handleOnBlur = () => {
    setKeydownCount(0);
    setMimicSelectAllInputs(false);
    if (focused) handleFocus();
  };

  const handleOnKeyDown = (e: ReactKeyboardEvent, index: number) => {
    if (isInvalidChar(e)) {
      e.preventDefault();
      return;
    }

    if (isNumber(e)) {
      activateInputs();
      handleInputSwitch(index);
    }

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      arrowHandler(e.key, index);
    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      setIsRTLMode(false);
      setKeydownCount(0);
    }

    if (
      !readOnly &&
      (e.key === 'Backspace' || e.key === 'Delete') &&
      mimicSelectAllInputs
    ) {
      setDisplayValueArray(['', '', '', '']);
      onInputEnd?.(undefined);
      setMimicSelectAllInputs(false);
    }

    if (e.key === 'Tab') handleFocus();

    if (e.key === 'Enter') updateGlobalValuesConditionally();
  };

  const handleInterpunction = (
    index: number,
    frameRate: FRAMERATE
  ): ':' | ';' => {
    if (index === secondsIndex && isDropFrame(frameRate)) return ';';
    return ':';
  };

  const updateGlobalValuesConditionally = useCallback(
    (condition = true) => {
      const validArrayValue = getValidTimecodeArrayValue(
        displayValueArray,
        frameRate
      );
      const newTimecode = convertArrayToTimecode(validArrayValue, frameRate);
      if (condition && newTimecode !== value) {
        onInputEnd?.(newTimecode);
      }
    },
    [displayValueArray, frameRate, onInputEnd, value]
  );

  const onBlurGlobalHandler = useCallback(
    (e: React.FocusEvent<HTMLDivElement>): void => {
      const isEmptyValue = !displayValueArray.every((value: string) => !!value);

      const isAnyTimecodeInputActive = !!inputRefArray.find(
        (element) => e.relatedTarget === element.current
      );
      updateGlobalValuesConditionally(
        !isEmptyValue && !isAnyTimecodeInputActive
      );
    },
    [updateGlobalValuesConditionally, displayValueArray, inputRefArray]
  );

  const arrowHandler = (
    arrowKey: 'ArrowRight' | 'ArrowLeft',
    activeInputIndex: number
  ) => {
    const newIndex =
      arrowKey === 'ArrowLeft'
        ? Math.max(0, activeInputIndex - 1)
        : Math.min(inputRefArray.length - 1, activeInputIndex + 1);

    if (newIndex !== activeInputIndex) {
      const inputToBeFocused = inputRefArray[newIndex];
      inputToBeFocused?.current?.select();
      setKeydownCount(0);
    }
  };

  const handleInputOnClick = (index: number) => {
    const inputRef = inputRefArray[index];
    const inputValue = displayValueArray[index];

    if (inputValue) inputRef.current?.select();
  };

  const getInputTabIndex = (index: number) => {
    if (displayValueArray[index]) return 0;
    return index === defaultIndexInput ? 0 : -1;
  };

  return (
    <TimecodeContainer data-cy='timecode-container'>
      {startButton}
      <TimecodeInputContainer
        focused={focused}
        disabled={disabled}
        readOnly={readOnly}
        error={error}
        onBlur={onBlurGlobalHandler}
        onDoubleClick={selectAllInputs}
        withStartButton={!!startButton}
        withEndButton={!!endButton}
      >
        {inputRefArray.map((input, index) => {
          return (
            <Fragment key={index}>
              <TimecodeInputBaseContainer>
                {mimicSelectAllInputs && !placeholderActive() && (
                  <TimecodeInputBaseHighlight>{''}</TimecodeInputBaseHighlight>
                )}
                <TimecodeInputBase
                  data-cy={`timecode-input-base-${index}`}
                  inputRef={input}
                  inputProps={{
                    type: 'number',
                    step: 1,
                    maxLength: 2,
                    tabIndex: getInputTabIndex(index)
                  }}
                  onChange={(e) => onChangeHandler(e, index)}
                  onKeyDown={(e) => {
                    handleOnKeyDown(e, index);
                  }}
                  value={displayValueArray[index]}
                  onFocus={handleSelect}
                  onBlur={handleOnBlur}
                  onClick={() => handleInputOnClick(index)}
                  placeholder={'--'}
                  readOnly={readOnly}
                  disabled={disabled}
                  sx={{
                    ...(mimicSelectAllInputs && {
                      'input::selection': { background: 'transparent' }
                    })
                  }}
                  {...rest}
                />
              </TimecodeInputBaseContainer>
              {framesIndex !== index && (
                <Typography
                  sx={{
                    paddingBottom: '1px',
                    color: placeholderActive() ? palette.text.placeholder : palette.text.primary,
                    ...(disabled && {
                      color: palette.text.disabled
                    })
                  }}
                >
                  {handleInterpunction(index, frameRate)}
                </Typography>
              )}
            </Fragment>
          );
        })}
      </TimecodeInputContainer>
      {endButton}
    </TimecodeContainer>
  );
};

export default TimecodeInput;
