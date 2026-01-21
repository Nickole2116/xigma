import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from "react";
import { getTelegramProfile, getTelegramUpdates, loginTelegramClient } from "@/services/modules/telegramclient.service";

const Dashboard = () => {
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

    const loadMessages = async () => {
      const data = await loginTelegramClient()
      console.log(data)
    }

    useEffect(() => {
        setTopNav(true);
        loadMessages();
    }, [])

    return <>
        <div class="page dashboard">
            dashboard header
        </div>
    </>;
};
  
export default Dashboard;