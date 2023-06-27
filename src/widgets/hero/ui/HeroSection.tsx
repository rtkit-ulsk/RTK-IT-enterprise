import { Greeting } from 'src/features/greeting';
import { Toggler } from 'src/features/theme-toggler';

import s from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <div className={s.root}>
      <Greeting />
      <Toggler />
    </div>
  );
};
