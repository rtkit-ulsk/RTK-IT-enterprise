import { Button } from 'src/shared/ui/Button/Button';
import { Typography } from 'src/shared/ui/Typography/Typography';

import s from './Greeting.module.css';

export const Greeting = () => {
  return (
    <div>
      <Typography variant="mega">Next.js РТК ИТ шаблон</Typography>
      <p className={s.description}>
        Начните свой проект с нашего полнофункционального, высокопроизводительного шаблона Next.js! Опыт быстрой
        разработки пользовательского интерфейса, ревью кода с искусственным интеллектом и полный набор инструментов для
        комфортной и приятной разработки.
      </p>

      <Button size="small">Начать использовать</Button>
    </div>
  );
};
