import { Activity, Bullhorn, CatalogPublish, Debug, Fish, Logout, Moon, Sun } from '@carbon/icons-react';
import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export function Sidebar() {
  const { toggleTheme, theme } = useTheme();
  const navigate = reactRouterDom.useNavigate();

  return (
    <aside className="h-full border-r bg-gray-900 border-gray-100 dark:border-gray-800/50 flex flex-col items-center justify-between text-gray-700">
      <div className="flex flex-col items-center">
        <div className="w-full h-full p-3 flex items-center justify-center bg-emerald-500 text-white">
          <Fish size={24} />
        </div>
        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
          onClick={() => navigate('/changelog')}
        >
          <Bullhorn size={20} />
        </button>

        <button
          type="button"
          className="p-4 items-start justify-center flex hover:bg-gray-800 hover:text-gray-200 transition-all"
          onClick={() => navigate('/')}
        >
          <CatalogPublish size={20} />
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
