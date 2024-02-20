import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import MoviePage from './pages/MoviePage/MoviePage';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Auth from './pages/Auth/Auth';
import Restore from './pages/Restore/Restore';

import './scss/main.scss';
import Registration from './pages/Registration/Registration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/movie/:id',
        element: <MoviePage />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/auth/restore',
        element: <Restore />,
      },
      {
        path: '/auth/registration',
        element: <Registration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
