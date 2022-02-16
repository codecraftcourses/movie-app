import React from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import type TabsProps from './TabsProps';

function Tabs({ tabs }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="scrollbar-hidden flex gap-4 overflow-x-auto">
        {tabs.map((tab) => (
          <Tab
            className={({ selected }) =>
              classNames('whitespace-nowrap text-2xl font-semibold', {
                'text-zinc-400': !selected,
              })
            }
            key={tab.title}
          >
            {tab.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.title}>{tab.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
