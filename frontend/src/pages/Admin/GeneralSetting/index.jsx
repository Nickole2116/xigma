import './index.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useState, useEffect } from 'react';
import LeftNav from './Components/LeftNav.jsx';
import { useParams } from "react-router-dom";

import PageCategory from './Components/PageCategory.jsx';
import PageDisplay from './Components/PageDisplay.jsx';
import PageLogging from './Components/PageLogging.jsx';
import PageStatus from './Components/PageStatus.jsx';
import PageTheme from './Components/PageTheme.jsx';
import PageUser from './Components/PageUser.jsx';

const GeneralSetting = () => {
    const { type } = useParams();
    const componentMap = {
        category: <PageCategory />,
        display: <PageDisplay />,
        logging: <PageLogging />,
        status: <PageStatus />,
        theme: <PageTheme />,
        user: <PageUser />,
    };

    const currentType = componentMap[type] ? type : 'display';

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
        setLeftNavCon(<LeftNav type={type} />);
        setTopSubNav(false);
        
    },[type]);

    return <>
        {componentMap[currentType]}
    </>;
}

export default GeneralSetting;