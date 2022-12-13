import React from 'react';
import { changelog } from '../../changelog';
import { ChangelogVersion } from '../components/ChangelogVersion';

export function ChangelogPage() {
  return (
    <main className="flex flex-col pb-8 gap-1 w-full h-full overflow-y-auto border-r dark:border-gray-800/50 border-gray-100">
      <div className="px-6 py-8 pb-16 flex flex-col gap-1 items-start bg-cover bg-bottom bg-no-repeat dark:bg-[url('./assets/changelog_bg.png')]">
        <h1 className="text-2xl text-gray-600 dark:text-gray-200 font-bold">Changelog</h1>
        <span className="text-md font-semibold text-gray-500 dark:text-gray-400">
          Cadastre, visualize e audite os registros no servidor.
        </span>
      </div>

      <div className="overflow-y-scroll px-6 w-full flex flex-col gap-8 -mt-8">
        {changelog.map((release) => (
          <ChangelogVersion release={release} key={release.version} />
        ))}
      </div>
    </main>
  );
}
