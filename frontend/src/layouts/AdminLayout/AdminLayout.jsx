import { Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { getUsers, getUser, createUser, updateUser, deleteUser } from '@/services/modules/user.service'

const AdminLayout = () => {
    const { t, i18n } = useTranslation()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false) // 加 loading 状态

    const fetchUsers = async () => {
        setLoading(true)
        try {
          const res = await getUsers()
          setUsers(res)
        } catch (err) {
          console.error('Failed to fetch users:', err)
        } finally {
          setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return <>
        {t('welcome')}
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        <button onClick={() => i18n.changeLanguage('ms')}>BM</button>

        {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}
        <Outlet/>
    </>;
};
  
export default AdminLayout;