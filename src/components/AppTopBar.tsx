import { Close, Maximize, Minimize, Subtract } from '@carbon/icons-react';
import React, { useState } from 'react';

export function AppTopBar() {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  return (
    <div className="px-2 flex items-center justify-between draggable bg-gray-900 border-b border-gray-800/75">
      <span className="text-xs font-semibold text-gray-500">Lambari - Top Fish</span>

      <div className="flex items-center gap-2 text-gray-400">
        <span className="text-xs text-white px-4 py-1 bg-violet-500 font-mono">BETA v0.1</span>

        <button onClick={window.Main.Minimize} className="undraggable p-1 px-2 hover:bg-gray-800 hover:text-white">
          <Subtract size={16} />
        </button>

        <button onClick={handleToggle} className="undraggable p-1 px-2 hover:bg-gray-800 hover:text-white">
          {isMaximize ? <Minimize size={16} /> : <Maximize size={16} />}
        </button>

        <button onClick={window.Main.Close} className="undraggable p-1 px-2 hover:bg-red-600 hover:text-white">
          <Close size={16} />
        </button>
      </div>
    </div>
  );
}
