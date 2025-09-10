import { BrowserRouter, Route, Routes } from 'react-router';
import { publicRoutes } from './router';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './application/store';
import Background from './ui/components/Background';
import { Layout } from './ui/components/Layout';

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
