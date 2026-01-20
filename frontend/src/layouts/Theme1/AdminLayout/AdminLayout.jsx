import '@/assets/css/mdi.css';
import '@/assets/css/theme1/global.scss';
import './AdminLayout.scss';

import { TopNav } from './Component/TopNav';

import { useEffect } from 'react';
import { Outlet, Route, Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { gets } from '@/services/modules/admin.service'

import { GlobalStoreProvider, useGlobalStore } from "@/hooks/GlobalStore.context";

const AdminLayout = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme,
          isLogined, setIsLogined, 
          themeMode, setThemeMode,
          topNav, setTopNav,
          topNavCon, setTopNavCon
        } = useGlobalStore();

  /*const { data: users = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 5000,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
    retry: 3,
  })*/

  useEffect(() => {
  
    document.documentElement.setAttribute(
      'data-theme',
      theme
    );

    document.documentElement.setAttribute(
      'data-mode',
      themeMode
    )
  }, [themeMode, theme])

  return (
    <div className={`themepage`}>
      {/*
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        <button onClick={() => i18n.changeLanguage('ms')}>BM</button>
      </div>
      */}
      {/** TopNav & Content */}
      {topNav && <TopNav>{topNavCon}</TopNav>}
      <Outlet />
    </div>
  )
}

export default AdminLayout
