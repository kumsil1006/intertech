import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HistoryPage from './pages/HistoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'history',
        element: <HistoryPage />,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
