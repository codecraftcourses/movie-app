import React from 'react';
import classNames from 'classnames';
import type BadgeProps from './BadgeProps';
import Icon from '../Icon';

function Badge({ color = 'secondary', icon, children }: BadgeProps) {
  return (
    <div
      className={classNames('flex gap-1 rounded-full py-0.5 pr-2', {
        'bg-primary-700': color === 'primary',
        'bg-zinc-800': color === 'secondary',
        'pl-2': !icon,
        'pl-1': icon,
      })}
    >
      {icon && <Icon icon={icon} />}
      <p className="text-sm font-semibold">{children}</p>
    </div>
  );
}

export default Badge;
