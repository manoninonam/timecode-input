import { KeyboardEvent } from 'react';

export const isInvalidChar = (e: KeyboardEvent) =>
  ['e', 'E', '+', '-', '.', ',', 'Dead', '`'].includes(e.key);
