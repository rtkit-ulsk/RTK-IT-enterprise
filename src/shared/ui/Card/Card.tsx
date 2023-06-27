import { ComponentProps, ReactNode } from 'react';

import { Typography } from '../Typography/Typography';
import s from './Card.module.css';

type CardPropsType = {
  title: string;
  body: string;
  icon: ReactNode;
} & ComponentProps<'div'>;

export const Card = (props: CardPropsType) => {
  const { title, body, icon } = props;
  return (
    <div className={s.root}>
      <div className={s.icon}>{icon}</div>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="caption">{body}</Typography>
    </div>
  );
};
