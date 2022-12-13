import React from 'react';

interface ChangelogTypeTagProps {
  type: 'feature' | 'fixes' | 'removed' | 'enhancement';
}

const tagStyleVariants = {
  feature: ['border-emerald-500', 'text-emerald-500'],
  fixes: ['border-cyan-500', 'text-cyan-500'],
  removed: ['border-red-500', 'text-red-500'],
  enhancement: ['border-purple-500', 'text-purple-500']
};

export function ChangelogTypeTag({ type }: ChangelogTypeTagProps) {
  const currentStyle = tagStyleVariants[type];

  const style = `
    px-2
    mb-2
    w-fit
    text-sm
    rounded
    border
    ${currentStyle[0]}
    ${currentStyle[1]}
  `;

  return <span className={style}>{type}</span>;
}
