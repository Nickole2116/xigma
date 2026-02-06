import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { use, useEffect, useState } from 'react';
import { getProjects, getCategories, verifyToken } from "@/services/modules/admin.service";

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
    const [projects, setProjects] = useState([]);


    const getProjectListings = async () => {
        const res = await getProjects();
        if (res.status === 200) {
            console.log(res);
            setProjects(res.project);
        } else {
            //error
        }
    }


    useEffect(() => {
        setTopNav(true);
        setLeftNav(true);
        setLeftNavCon(<LeftNav/>);
        setTopSubNav(true);
        setTopSubNavCon(<TopSubNav mode={mode} setMode={setMode}/>);
        getProjectListings();

    }, [mode])

    return <>
        {/**  */}
        {/** Mansory Layout */}
        {mode == 'mansory' && <>
            <MansoryLayout projects={projects}/>
        </>}
        {mode == 'row' && <>
            <RowLayout projects={projects}/>
        </>}
        

    </>;
}

export default Project;