import { Card } from 'src/shared/ui/Card/Card';

import { FEATURES } from '../api/features';
import s from './FeatureList.module.css';

export const FeatureList = () => {
  return (
    <div className={s.root}>
      {FEATURES.map((feature) => (
        <Card key={feature.name} title={feature.name} body={feature.description} icon={feature.icon} />
      ))}
    </div>
  );
};
