import './index.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect, useState } from 'react';
import LeftNav from './Components/LeftNav.jsx';
import TopSubNav from './Components/TopSubNav.jsx';
import MansoryLayout from './Components/MansoryLayout.jsx';
import RowLayout from './Components/RowLayout.jsx';

const Drive = () => {

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
    const [layout, setLayout] = useState('mansory');

    useEffect(() => {
        setTopNav(true);
        setLeftNav(true);
        setLeftNavCon(<LeftNav />);
        setTopSubNav(true);
        setTopSubNavCon(<TopSubNav layout={layout} setLayout={setLayout}/>);
    }, [layout])
    return <>
        {layout == 'mansory' ? <MansoryLayout /> : <RowLayout />}
    </>;
}


export default Drive;