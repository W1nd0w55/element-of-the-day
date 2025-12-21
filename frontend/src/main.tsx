import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Error404 from './Error404.tsx';
import './main.css';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '*', element: <Error404 /> }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
