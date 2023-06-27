import { Typography as DSTypography } from '@design-system-rt/rtk-ui-kit';
import React, { ComponentProps } from 'react';

type TypographyProps = ComponentProps<typeof DSTypography>;

export const Typography = (props: TypographyProps) => {
  return <DSTypography {...props} />;
};
