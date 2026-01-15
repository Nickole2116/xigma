import UserLayout from '@/layouts/UserLayout/UserLayout';


const userRoutes = {
    path: '/user', 
  element: <UserLayout />,
  children: [
    //{ path: '/dashboard', element: <Dashboard /> },
    //{ path: '/products', element: <Products /> },
  ],
};

export default userRoutes;