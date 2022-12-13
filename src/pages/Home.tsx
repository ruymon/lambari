import React from 'react';

export function HomePage() {
  return (
    <main className="px-6 py-8 pb-16 flex flex-col gap-16 w-full h-full border-r dark:border-gray-800/50 border-gray-100">
      <div className="flex flex-col gap-1 items-start">
        <span className="text-3xl text-gray-600 dark:text-gray-200 font-bold">Discover</span>
        <span className="text-md font-medium text-gray-500 dark:text-gray-400">Acompanhe as tendencias</span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <button type="button" className="flex flex-col justify-center bg-cyan-500 p-6 hover:opacity-90 w-full">
          <span className="text-xl font-semibold text-white">Card Tittle</span>
          <span className="text-md font-medium text-white/75">Some description...</span>
        </button>
        <button type="button" className="flex flex-col justify-center bg-amber-500 p-6 hover:opacity-90 w-full">
          <span className="text-xl font-semibold text-white">Card Tittle</span>
          <span className="text-md font-medium text-white/75">Some description...</span>
        </button>
      </div>
    </main>
  );
}
