import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HistoryPage from '@pages/HistoryPage';
import HomePage from '@pages/HomePage';
import ProductPage from '@pages/ProductPage';
import ErrorPage from '@pages/ErrorPage';
import ProductDetailPage from '@pages/ProductDetailPage';
import AboutPage from '@pages/AboutPage';
import Products from '@components/Home/Products';
import Location from '@components/Home/Location';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'product',
        element: <Products />
      },
      {
        path: 'product/:productName',
        element: <ProductPage/>
      },
      {
        path: 'product/:productName/:subCategory',
        element: <ProductDetailPage />
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'map',
        element: <Location />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
