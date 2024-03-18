import { render } from '@testing-library/react';
import TimecodeInput from './TimecodeInput';

describe('TimecodeInput', () => {
  it('should render four separate inputs with each "--" as placeholder', () => {
    const { getAllByPlaceholderText } = render(
      <TimecodeInput frameRate={25} />
    );

    const inputs = getAllByPlaceholderText('--');
    expect(inputs.length).toBe(4);
  });
});
