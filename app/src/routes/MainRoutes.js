import { lazy } from 'react';

import Loadable from '../components/loadable';

// routing
const Home = Loadable(lazy(() => import('../views/home')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    // path: '/',
    // element: <Home />,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        },
    ]
};

export default MainRoutes;