import { useRoutes } from 'react-router-dom';
import adminRoutes from './admin';
import userRoutes from './user';

export default function AppRoutes() {
  return useRoutes([
    adminRoutes,
    userRoutes,
  ]);
}
