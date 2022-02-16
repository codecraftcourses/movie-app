import React from 'react';
import { HiStar } from 'react-icons/hi';
import type IconProps from './IconProps';

function Icon({ icon, size = 20 }: IconProps) {
  switch (icon) {
    case 'star':
      return <HiStar size={size} />;
    default:
      return null;
  }
}

export default Icon;
