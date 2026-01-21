import '@/assets/css/mdi.css';
import '@/assets/css/theme1/global.scss';
import './AdminLayout.scss';

import { TopNav } from './Component/TopNav';
import { BottomNav } from './Component/BottomNav';
import { LeftNav } from './Component/LeftNav';
import { RightNav } from './Component/RightNav';
import { TopSubNav } from './Component/TopSubNav';
import { BottomSubNav } from './Component/BottomSubNav';
import { LeftSubNav } from './Component/LeftSubNav';
import { RightSubNav } from './Component/RightSubNav';

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
          topNavCon, setTopNavCon,
          leftNav, setLeftNav,
          leftNavCon, setLeftNavCon,
          rightNav, setRightNav,
          rightNavCon, setRightNavCon,
          bottomNav, setBottomNav,
          bottomNavCon, setBottomNavCon,
          topSubNav, setTopSubNav,
          topSubNavCon, setTopSubNavCon,
          leftSubNav, setLeftSubNav,
          leftSubNavCon, setLeftSubNavCon,
          rightSubNav, setRightSubNav,
          rightSubNavCon, setRightSubNavCon,
          bottomSubNav, setBottomSubNav,
          bottomSubNavCon, setBottomSubNavCon,
          isPageLoading, setIsPageLoading
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
    <div className={`theme-container`}>
      {/*
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        <button onClick={() => i18n.changeLanguage('ms')}>BM</button>
      </div>
      */}
      {/** TopNav & Content */}
      
      <div className="main-template">
        
        
        {leftNav && <LeftNav>{leftNavCon}</LeftNav>}
        {/** Main Content */}
        <div className="main-page-content">

          {topNav && (topNavCon ? <TopNav>{topNavCon}</TopNav> : <TopNav/>)}

          <div class="main-body">
            {/** Inner Container */}
            
            {leftSubNav && <LeftSubNav>{leftSubNavCon}</LeftSubNav>}
            <div class="sub-body">
              {topSubNav && <TopSubNav>{topSubNavCon}</TopSubNav>}

              <Outlet />
              {bottomSubNav && <BottomSubNav>{bottomSubNavCon}</BottomSubNav>}
            </div>
            {rightSubNav && <RightSubNav>{rightSubNavCon}</RightSubNav>}
            
          </div>

          {/** Bottom Nav */}
          {bottomNav && <BottomNav>{bottomNavCon}</BottomNav>}

        </div>
        {rightNav && <RightNav>{rightNavCon}</RightNav>}

        
      </div>
      
    </div>
  )
}

export default AdminLayout
