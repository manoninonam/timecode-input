import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const MarkerFilled = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M10 4H22V22L16 28L10 22V4Z' />
    </SvgIcon>
  );
};

export const MarkIn = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 4H12V6H6V26H12V28H4V4ZM16.7071 24.7071L8 16L16.7071 7.29291L18.1213 8.70712L11.8284 15H26V4H28V17L11.8284 17L18.1213 23.2929L16.7071 24.7071Z'
      />
    </SvgIcon>
  );
};

export const MarkOut = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28 4H20V6H26V26H20V28H28V4ZM15.2929 24.7071L24 16L15.2929 7.29291L13.8787 8.70712L20.1716 15H6V4H4V17L20.1716 17L13.8787 23.2929L15.2929 24.7071Z'
      />
    </SvgIcon>
  );
};
