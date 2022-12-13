import React from 'react';

import { Route, Router } from 'electron-router-dom';
import App from './App';
import { AppealPage } from './pages/Appeal';
import { ChangelogPage } from './pages/Changelog';
import { HomePage } from './pages/Home';

function appShell(Perl: React.FC) {
  return (
    <App>
      <Perl />
    </App>
  );
}

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" index element={appShell(HomePage)} />
          <Route path="/appeal" element={appShell(AppealPage)} />
          <Route path="/changelog" element={appShell(ChangelogPage)} />
        </>
      }
    />
  );
}
