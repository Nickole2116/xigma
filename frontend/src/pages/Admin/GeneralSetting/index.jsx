import './index.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useState, useEffect } from 'react';
import LeftNav from './Components/LeftNav.jsx';

const GeneralSetting = () => {
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

    useEffect(() => {
        setTopNav(true);
        setLeftNav(true);
        setLeftNavCon(<LeftNav />);
        
    },[]);

    return <>
    
    
    </>;
}

export default GeneralSetting;