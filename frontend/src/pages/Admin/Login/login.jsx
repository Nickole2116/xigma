import './login.scss';
import { useEffect } from 'react';
import { useGlobalStore } from "@/hooks/GlobalStore.context";

//Content
import Checks from "./content/Checks";
import ManualLogin from "./content/ManualLogin";
import TelegramLogin from "./content/TelegramLogin";


export const Login = () => {
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
        setTopNav();
    })


    return <>
        <div className={`fullpage flex-center ${themeMode}`}>
            {/*<TelegramLogin />*/}
            <ManualLogin />
            {/*<Checks />*/}
        </div>
    </>;
}

export default Login;