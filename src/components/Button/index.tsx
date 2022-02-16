import React from 'react';
import type ButtonProps from './ButtonProps';
import Icon from '../Icon';

function Button({ children, href, icon }: ButtonProps) {
  return (
    <a
      className="inline-flex gap-1 rounded-full bg-white py-2.5 px-2 text-sm font-semibold text-zinc-900"
      href={href}
    >
      <span>{children}</span>
      {icon && <Icon icon={icon} />}
    </a>
  );
}

export default Button;
