import AdminLayout from '@/layouts/Theme1/AdminLayout/AdminLayout';
import Login from '@/pages/Admin/Login/login';
import Dashboard from '@/pages/Admin/Dashboard/dashboard';
import Project from '@/pages/Admin/Project';
import Chat from '@/pages/Admin/Chat';
import Drive from '@/pages/Admin/Drive';
import Finance from '@/pages/Admin/Finance';
import GeneralSetting from '@/pages/Admin/GeneralSetting';
import Theme from '@/pages/Admin/Theme';

const adminRoutes = {
    path: '/admin', 
    element: <AdminLayout />,
    children: [
        { path: '', element: <Login/> },
        { path: 'dashboard', element: <Dashboard/> },
        { path: 'chat', element: <Chat/> },
        { path: 'drive', element: <Drive /> },
        { path: 'finance', element: <Finance /> },
        { path: 'project', element: <Project/> },
        { path: 'general-setting', element: <GeneralSetting /> },
        { path: 'theme', element: <Theme /> },

        //{ path: '/products', element: <Products /> },
    ],
};

export default adminRoutes;