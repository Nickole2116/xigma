import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from 'react';

// import content
import LeftNav from "./Component/LeftNav";
import TopSubNav from "./Component/TopSubNav";
import MansoryLayout from "./Component/MansoryLayout";

const Project = () => {
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
        setLeftNavCon(<LeftNav/>);
        setTopSubNav(true);
        setTopSubNavCon(<TopSubNav/>);

    }, [])

    return <>
        {/**  */}
        {/** Mansory Layout */}
        <MansoryLayout />

    </>;
}

export default Project;