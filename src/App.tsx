import  { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/routes'; // Assuming this file defines route paths

// Components
import Dashboard from './layout/Dashboard/Dashboard';
import Login from './layout/Login/Login';
import Register from './layout/Login/Register';
import Training from './layout/Training/Training'; // Import Training component

import dataProps from './data.json'; // Assuming this file contains props for components

function App() {
  const { dashboardProps, loginProps, registerProps, trainingProps, theme } = dataProps;

  // Set theme on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main data-theme={theme} className='m-10'>
      <Routes>
        {/* Login */}
        <Route path={routes.login} element={<Login {...loginProps} />} />

        {/* Dashboard */}
        <Route path={routes.dashboard} element={<Dashboard {...dashboardProps} />} />

        {/* Registration */}
        <Route path={routes.register} element={<Register {...registerProps} />} />

        {/* Training */}
        <Route path={routes.training} element={<Training {...trainingProps} />} />
      </Routes>
    </main>
  );
}

export default App;
