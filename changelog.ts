type IChange = {
  type: 'feature' | 'fixes' | 'removed' | 'enhancement';
  items: string[];
};

export interface IReleases {
  version: string;
  date: string;
  changes: IChange[];
}

type IChangelog = IReleases[];

export const changelog: IChangelog = [
  {
    version: 'v0.0.2 ALPHA',
    date: '13/12/2022',
    changes: [
      {
        type: 'feature',
        items: ['Changelog page', 'Add React Router']
      },
      {
        type: 'fixes',
        items: ['Dark mode loading']
      },
      {
        type: 'enhancement',
        items: ['Loading page modal', 'Dark mode colors', 'Icons & Text']
      }
    ]
  },
  {
    version: 'v0.0.1 ALPHA',
    date: '13/12/2022',
    changes: [
      {
        type: 'feature',
        items: ['Add theme integration (Dark & Light)', 'Add Appeal Module', 'Project Core']
      }
    ]
  }
];
