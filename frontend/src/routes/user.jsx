import UserLayout from '@/layouts/Theme1/UserLayout/UserLayout';
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