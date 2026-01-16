import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import Dashboard from '@/pages/Admin/Dashboard/dashboard';

const adminRoutes = {
    path: '/admin', 
    element: <AdminLayout />,
    children: [
        { path: '', element: <Dashboard/> },
        { path: 'dashboard', element: <Dashboard/> },
        //{ path: '/products', element: <Products /> },
    ],
};

export default adminRoutes;