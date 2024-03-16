import { FocusEvent } from 'react';
export const loseFocus = (
  event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const nextActiveElement = event.relatedTarget as
    | HTMLInputElement
    | HTMLTextAreaElement;
  return (
    nextActiveElement?.tagName.toLowerCase() !== 'input' &&
    nextActiveElement?.getAttribute('type') !== 'number'
  );
};
