import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import MainLayout from './layouts/MainLayout/MainLayout';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import MoviePage from './pages/MoviePage/MoviePage';

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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
