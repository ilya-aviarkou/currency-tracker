import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { appRoutes } from './constants/appRoutes.ts';

const HomePage = lazy(() => import('@pages/home'));
const Timeline = lazy(() => import('@pages/timeline'));
const BankCard = lazy(() => import('@pages/bankCard'));
const Contacts = lazy(() => import('@pages/contacts'));

const router = createBrowserRouter([
  {
    path: appRoutes.base,
    Component: HomePage,
  },
  {
    path: appRoutes.timeline,
    Component: Timeline,
  },
  {
    path: appRoutes.bankCard,
    Component: BankCard,
  },
  {
    path: appRoutes.contacts,
    Component: Contacts,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
