import { lazy } from 'react';
import Loadable from '../components/loadable';
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';

const Home = Loadable(lazy(() => import('../views/home')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <Home /> }, MainRoutes]);
}