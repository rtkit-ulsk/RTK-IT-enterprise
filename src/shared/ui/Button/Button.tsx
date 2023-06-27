import { Button as DCButton } from '@design-system-rt/rtk-ui-kit';
import React, { ComponentProps } from 'react';

type ButtonPropsType = ComponentProps<typeof DCButton>;

export const Button = (props: ButtonPropsType) => {
  return <DCButton {...props} />;
};
