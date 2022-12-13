import { CaretRight, Tag } from '@carbon/icons-react';
import React from 'react';
import { IReleases } from '../../changelog';
import { ChangelogTypeTag } from './ChangelogTypeTag';

interface ChangelogVersionProps {
  release: IReleases;
}

export function ChangelogVersion({ release }: ChangelogVersionProps) {
  return (
    <div className="w-full p-4 rounded border dark:border-gray-800 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag size={20} className="text-emerald-400" />
          <span className="font-medium text-2xl text-gray-600 dark:text-gray-200">{release.version}</span>
        </div>

        <span className="dark:text-gray-600 text-sm font-medium">{release.date}</span>
      </div>

      <hr className="mb-2 dark:border-gray-800" />

      <div className="flex flex-col gap-8">
        {release.changes.map((changes) => (
          <div className="flex flex-col gap-2">
            <ChangelogTypeTag type={changes.type} key={changes.type} />
            {changes.items.map((item) => (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CaretRight size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
