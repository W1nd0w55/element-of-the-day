import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App.tsx';
import Error404 from './components/Error404.tsx';
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
