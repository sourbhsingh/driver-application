import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/routes';

//Components
import Dashboard from './layout/Dashboard/Dashboard';
import Login from './layout/Login/Login';

import dataProps from './data.json';

function App() {
  const { dashboardProps, loginProps, theme } = dataProps;

  // TODO: Review if this is necessary
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <main>
      <Routes>
        {/* login */}
        <Route path={routes.login} element={<Login {...loginProps} />} />

        {/* dashboard */}
        <Route
          path={routes.dashboard}
          element={<Dashboard {...dashboardProps} />}
        />
      </Routes>
    </main>
  );
}

export default App;
