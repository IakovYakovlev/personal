import { HashRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './application/router';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './application/store';
import Background from './ui/components/Background';
import { Layout } from './ui/components/Layout';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense>
          <Background />
          <Routes>
            {/* Родительский маршрут с Layout */}
            <Route element={<Layout />}>
              {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  );
}

export default App;
