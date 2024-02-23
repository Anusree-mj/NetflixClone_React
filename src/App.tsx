import React from 'react';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './pages/404';
import { routes } from './routes';
function App() {
  return (

    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {/* <Route path='/sign' element={<Home />} />

      <Route
        path="*"
        element={<ErrorPage />}
      /> */}
    </Routes>




  );
}

export default App;
