import { Outlet, Route, Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/services/modules/user.service'

import { GlobalStoreProvider } from "@/hooks/GlobalStore.context";
import styles from './AdminLayout.module.scss';

const AdminLayout = () => {
  const { t, i18n } = useTranslation()

  const { data: users = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 5000,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
    retry: 3,
  })

  return (
    <div>
      <h1>{t('welcome')}</h1>

      <Link to="/admin" className={`${styles.btn} sub1`}>Go to Users <i class={`${styles.icon}`}>88</i></Link>
      <Link to="/user">Go to Users</Link>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        <button onClick={() => i18n.changeLanguage('ms')}>BM</button>
        <button onClick={() => refetch()}>Refetch Now</button>
      </div>

      {isLoading ? (
        <p>Loading users...</p>
      ) : isError ? (
        <p>Error loading users</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.name}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}
      <GlobalStoreProvider>
      <Outlet />
      </GlobalStoreProvider>
      
    </div>
  )
}

export default AdminLayout
