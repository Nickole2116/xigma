import UserLayout from '@/layouts/UserLayout/UserLayout';
import Dashboard from '@/pages/User/Dashboard/dashboard';


const userRoutes = {
    path: '/user', 
  element: <UserLayout />,
  children: [
    { path: 'dashboard', element: <Dashboard /> },
    //{ path: '/products', element: <Products /> },
  ],
};

export default userRoutes;