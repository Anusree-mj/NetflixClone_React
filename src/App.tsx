import React from 'react';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './pages/404';
import { routes } from './routes';
import { AuthContextProvider } from '../src/components/AuthContext'; // Update the path accordingly

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
