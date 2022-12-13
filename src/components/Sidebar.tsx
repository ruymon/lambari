import { Activity, AirportLocation, Debug, Fish, Logout, Moon, Network_1, Sun } from '@carbon/icons-react';
import useTheme from '../hooks/useTheme';

export function Sidebar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <aside className="h-full border-r bg-gray-900 border-gray-100 dark:border-gray-800/50 flex flex-col items-center justify-between text-gray-700">
      <div className="flex flex-col items-center">
        <div className="w-full h-full p-3 flex items-center justify-center bg-green-500 text-white">
          <Fish size={24} />
        </div>
        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
        >
          <AirportLocation size={20} />
        </button>

        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
        >
          <Network_1 size={20} />
        </button>

        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
        >
          <Activity size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
          onClick={() => toggleTheme()}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
        >
          <Debug size={20} />
        </button>

        <button
          type="button"
          className="p-4 py-6 items-start justify-center flex hover:bg-red-600 hover:text-gray-200 transition-all"
        >
          <Logout size={20} />
        </button>
      </div>
    </aside>
  );
}
