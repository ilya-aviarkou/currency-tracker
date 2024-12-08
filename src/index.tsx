import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { appRoutes } from '@constants/appRoutes';
import { GlobalStyles } from '@components/globalStyles/styled.ts';
import Navbar from '@components/navbar/index.tsx';

const HomePage = lazy(() => import('@pages/home'));
const Timeline = lazy(() => import('@pages/timeline'));
const BankCard = lazy(() => import('@pages/bankCard'));
const Contacts = lazy(() => import('@pages/contacts'));

const routes = [
  {
    path: appRoutes.base,
    Component: HomePage,
    id: 'home',
  },
  {
    path: appRoutes.timeline,
    Component: Timeline,
    id: 'timeline',
  },
  {
    path: appRoutes.bankCard,
    Component: BankCard,
    id: 'bank-card',
  },
  {
    path: appRoutes.contacts,
    Component: Contacts,
    id: 'contacts',
  },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          {routes.map(({ Component, path, id }) => (
            <Route Component={Component} path={path} key={id} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
