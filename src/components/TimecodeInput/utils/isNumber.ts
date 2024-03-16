import { KeyboardEvent } from 'react';

export const isNumber = (e: KeyboardEvent) => e.key >= '0' && e.key <= '9';
