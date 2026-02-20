import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage.jsx';
import App from './App.jsx';
import ErrorPage from './ErrorPage.jsx';
import DataCollector from './DataCollection/DataCollector.jsx';
import DataReview from './DataReview/DataReview.jsx';
import CvPreview from './cvPreview/cvPreview.jsx';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage />, errorElement: <ErrorPage /> },
  {
    path: 'app',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dataCollection" replace /> },
      { path: 'dataCollection/:section', element: <DataCollector /> },
      { path: 'dataReview', element: <DataReview /> },
      { path: 'cvPreview', element: <CvPreview /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
