import { Atom, HammerWrench, StatisticsColumn } from '@design-system-rt/rtk-ui-kit';
import Image from 'next/image';
import { ReactNode } from 'react';

import TsIcon from '../ui/images/action-security-check.svg';
import eslintIcon from '../ui/images/eslint-icon-1.svg';
import nextIcon from '../ui/images/nextjs-icon-svgrepo-com-1.svg';
import postCssIcon from '../ui/images/postcss-logo.svg';

type FeatureType = {
  name: string;
  icon: ReactNode;
  description: string;
};

const makeFeature = (name: string, description: string, icon: ReactNode): FeatureType => ({
  description,
  name,
  icon,
});

export const FEATURES: FeatureType[] = [
  makeFeature(
    'Next.js',
    'Быстрый по умолчанию, с оптимизированной конфигурацией для производительности.',
    <Image alt="Next Js" src={nextIcon} width={32} height={32} />,
  ),
  makeFeature(
    'Atomaro design system',
    'Консистентный пользовательский опыт цифровых продуктов Ростелекома',
    <Atom fill="var(--base-colors-primary1)" size={32} />,
  ),
  makeFeature(
    'ESlint & Prettier & StyleLint',
    'Для чистого, последовательного и безошибочного кода.',
    <Image alt="Next Js" src={eslintIcon} width={32} height={32} />,
  ),
  makeFeature(
    'Максимально строгий TypeScript',
    'С помощью библиотеки `ts-reset` для максимальной безопасности типов.',
    <Image alt="Next Js" src={TsIcon} width={32} height={32} />,
  ),
  makeFeature(
    'PostCSS и Preset Env',
    'Передовые фичи css и автоматическая оптимизация стилей с postcss.',
    <Image alt="Post CSS" src={postCssIcon} width={40} height={32} />,
  ),
  makeFeature(
    'Bundle analyzer plugin',
    'Следите за размером своего приложения.',
    <StatisticsColumn fill="var(--base-colors-primary1)" size={32} />,
  ),
  makeFeature(
    'Jest & React Testing Library',
    'Для надежных модульных и интеграционных тестов.',
    <HammerWrench fill="var(--base-colors-primary1)" size={32} />,
  ),
  makeFeature(
    'Storybook',
    'Создавай, тестируй и показывай свои компоненты.',
    <HammerWrench fill="var(--base-colors-primary1)" size={32} />,
  ),
];
