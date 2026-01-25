import './dashboard.scss';
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
            {/** Banner */}
            <section className="banner">
                <div className="date">
                    <h2>21<b>th</b></h2>
                    <div className="info">
                        <h5>Mon.</h5>
                        <span>January</span>
                    </div>
                </div>

                <div className="welcome">
                    <div className="main">Welcome Back</div>
                    <div className="sub">Tan Nickole, Superadmin</div>
                </div>

                <div className="search">
                    <div className="btn-search-ai">
                        <i className="mdi mdi-search-web"></i>
                    </div>
                </div>
            </section>

            {/** Dashboard Grid Layout */}
            <section className="dashboard-grid">
                <div className="new-request">
                    <div className="title">New Request</div>

                    <div class="listing">
                        ss
                    </div>
                </div>
                <div className="coming-request">
                    <div className="title">Coming on Next</div>

                    <div class="listing">
                        ss
                    </div>
                </div>
                <div className="pending-request">
                    <div className="title">Latest Completed</div>

                    <div class="listing">
                        ss
                    </div>
                </div>
                <div className="progressed-request">
                    <div className="title">Projects On Due</div>

                    <div class="info">
                        <div className="listing"></div>
                        <div className="calender"></div>
                    </div>
                </div>
            </section>

        </div>
    </>;
};
  
export default Dashboard;