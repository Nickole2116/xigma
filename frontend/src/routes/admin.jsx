import AdminLayout from '@/layouts/Theme1/AdminLayout/AdminLayout';
import Login from '@/pages/Admin/Login/login';
import Dashboard from '@/pages/Admin/Dashboard/dashboard';
import Project from '@/pages/Admin/Project';

const adminRoutes = {
    path: '/admin', 
    element: <AdminLayout />,
    children: [
        { path: '', element: <Login/> },
        { path: 'dashboard', element: <Dashboard/> },
        { path: 'chat', element: <Dashboard/> },
        { path: 'drive', element: <Dashboard/> },
        { path: 'finance', element: <Dashboard/> },
        { path: 'project', element: <Project/> },

        //{ path: '/products', element: <Products /> },
    ],
};

export default adminRoutes;