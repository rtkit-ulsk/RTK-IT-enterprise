import { Button as DCButton } from '@design-system-rt/rtk-ui-kit';
import React, { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof DCButton>;

export const Button = (props: ButtonProps) => {
  return <DCButton {...props} />;
};
