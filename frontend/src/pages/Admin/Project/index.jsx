import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { use, useEffect, useState } from 'react';

// import content
import LeftNav from "./Component/LeftNav";
import TopSubNav from "./Component/TopSubNav";
import MansoryLayout from "./Component/MansoryLayout";
import RowLayout from "./Component/RowLayout";

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

    const [mode, setMode] = useState('mansory');

    useEffect(() => {
        setTopNav(true);
        setLeftNav(true);
        setLeftNavCon(<LeftNav/>);
        setTopSubNav(true);
        setTopSubNavCon(<TopSubNav mode={mode} setMode={setMode}/>);

    }, [mode])

    return <>
        {/**  */}
        {/** Mansory Layout */}
        {mode == 'mansory' && <>
            <MansoryLayout />
        </>}
        {mode == 'row' && <>
            <RowLayout />
        </>}
        

    </>;
}

export default Project;