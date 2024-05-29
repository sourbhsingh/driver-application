import './App.css';

//Components
import Dashboard from './layout/Dashboard/Dashboard';
import Login from './layout/Login/Login';

import dataProps from './data.json';

function App() {
  const { dashboardProps, loginProps, theme } = dataProps;

  return (
    <main data-theme={theme}>
      {/* login */}
      <Login {...loginProps} />

      {/* dashboard */}
      <Dashboard {...dashboardProps} />
    </main>
  );
}

export default App;
