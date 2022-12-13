import React from 'react';
import { AppTopBar } from './components/AppTopBar';
import { Sidebar } from './components/Sidebar';
import { AppealPage } from './pages/Appeal';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      {window.Main && (
        <div className="flex-none">
          <AppTopBar />
        </div>
      )}
      <div className="flex h-full w-full bg-white dark:bg-gray-900">
        <Sidebar />
        <AppealPage />
      </div>
    </div>
  );
}

export default App;
