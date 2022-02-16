import type { ReactText } from 'react';
import type { Color, Icon } from '../../types';

type BadgeProps = {
  color?: Color;
  icon?: Icon;
  children: ReactText;
};

export default BadgeProps;
