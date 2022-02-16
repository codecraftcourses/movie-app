import type { ReactText } from 'react';
import type { Icon } from '../../types';

type ButtonProps = {
  children: ReactText;
  href: string;
  icon?: Icon;
};

export default ButtonProps;
