import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './ui/components/Layout';
import { publicRoutes } from './application/router';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './application/store';
import Background from './ui/components/Background';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense>
          <Background />
          <Routes>
            <Route element={<Layout />}>
              {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
