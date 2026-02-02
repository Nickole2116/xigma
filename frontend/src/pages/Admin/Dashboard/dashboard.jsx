import './dashboard.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from "react";
import { ThirdButton, SubmitButton, CancelButton, MoreButton, DownloadButton } from '@/pages/Shared';
import { getTelegramProfile, getTelegramUpdates, loginTelegramClient } from "@/services/modules/telegramclient.service";
import SmallCalender from '@/pages/Admin/Components/Calender/SmallCalender';

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
        setLeftNav(false);
        setTopSubNav(false);
        // loadMessages();
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
                    <div className="time">20<b>:</b>59</div>
                    <div className="main">Welcome Back, Tan Nickole</div>
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
                    <div className="header">
                        <div className="title">New Request</div>
                        <div className="action">
                            <ThirdButton>Create New</ThirdButton>
                        </div>
                    </div>
                    

                    <div class="listing">
                        <div className="each-list">
                            <div className="info">
                                <div className="thumbnail">
                                    <img src="https://picsum.photos/200/300" alt="profile" />
                                    <span>Allan Ng <b>(017***7827)</b></span>
                                </div>
                                <div class="comment">
                                    Hi, I want can direct login der login page API
                                </div>
                                <div class="ticketno">
                                    <div class="highlight">#</div>
                                    <span>176375</span>
                                </div>
                                <div class="footer">
                                    <span className="date">25 Jan 2025 | 20:37</span>
                                    <div className="action">
                                        <SubmitButton>Create Project</SubmitButton>
                                        <CancelButton>Delete</CancelButton>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="info">
                                <div className="thumbnail">
                                    <img src="https://picsum.photos/200/300" alt="profile" />
                                    <span>Allan Ng <b>(017***7827)</b></span>
                                </div>
                                <div class="comment">
                                    Hi, I want can direct login der login page API
                                </div>
                                <div class="ticketno">
                                    <div class="highlight">#</div>
                                    <span>176375</span>
                                </div>
                                <div class="footer">
                                    <span className="date">25 Jan 2025 | 20:37</span>
                                    <div className="action">
                                        <SubmitButton>Create Project</SubmitButton>
                                        <CancelButton>Delete</CancelButton>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="info">
                                <div className="thumbnail">
                                    <img src="https://picsum.photos/200/300" alt="profile" />
                                    <span>Allan Ng <b>(017***7827)</b></span>
                                </div>
                                <div class="comment">
                                    Hi, I want can direct login der login page API
                                </div>
                                <div class="ticketno">
                                    <div class="highlight">#</div>
                                    <span>176375</span>
                                </div>
                                <div class="footer">
                                    <span className="date">25 Jan 2025 | 20:37</span>
                                    <div className="action">
                                        <SubmitButton>Create Project</SubmitButton>
                                        <CancelButton>Delete</CancelButton>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coming-request">
                    <div className="header">
                        <div className="title">Coming On Next</div>
                        <div className="action">
                            <MoreButton>
                                <span>More</span>
                                <i className="mdi mdi-arrow-expand-all"></i>
                            </MoreButton>
                        </div>
                    </div>

                    <div class="listing">
                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>176375</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>176375</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>176375</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>176375</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>176375</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>176375</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="completed-request">
                    <div className="header">
                        <div className="title">Latest Completed</div>
                        <div className="action">
                            <MoreButton>
                                <span>More</span>
                                <i className="mdi mdi-arrow-expand-all"></i>
                            </MoreButton>
                        </div>
                    </div>

                    <div class="listing">
                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <DownloadButton>
                                        <span>Get Now</span>
                                    </DownloadButton>
                                    <SubmitButton>
                                        <span>Review</span>
                                    </SubmitButton>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <DownloadButton>
                                        <span>Get Now</span>
                                    </DownloadButton>
                                    <SubmitButton>
                                        <span>Review</span>
                                    </SubmitButton>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <DownloadButton>
                                        <span>Get Now</span>
                                    </DownloadButton>
                                    <SubmitButton>
                                        <span>Review</span>
                                    </SubmitButton>
                                </div>
                                
                            </div>
                        </div>

                        <div className="each-list">
                            <div className="thumbnail">
                                <img src="https://picsum.photos/200/300" alt="profile" />
                            </div>
                            <div className="info">
                                <span className="name">Maxwell</span>
                                <div class="ml-auto sub-info">
                                    <DownloadButton>
                                        <span>Get Now</span>
                                    </DownloadButton>
                                    <SubmitButton>
                                        <span>Review</span>
                                    </SubmitButton>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progressed-request">
                    <div className="header">
                        <div className="title">Projects on Due / Activity Notify</div>
                    </div>

                    <div class="info">
                        {/*<div className="calender">
                            <SmallCalender viewMonth={true}/>
                        </div>
                        <div className="calender-listing">
                            <div className="each-task">
                                <div className="name">Maxwell Global</div>
                            </div>
                        </div>*/}

                        
                    </div>
                </div>
            </section>

        </div>
    </>;
};
  
export default Dashboard;