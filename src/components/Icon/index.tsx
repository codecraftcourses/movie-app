import React from 'react';
import { HiStar, HiOutlineExternalLink } from 'react-icons/hi';
import type IconProps from './IconProps';

function Icon({ icon, size = 20 }: IconProps) {
  switch (icon) {
    case 'star':
      return <HiStar size={size} />;
    case 'external-link':
      return <HiOutlineExternalLink size={size} />;
    default:
      return null;
  }
}

export default Icon;
