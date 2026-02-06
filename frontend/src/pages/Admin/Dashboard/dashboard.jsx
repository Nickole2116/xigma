import './dashboard.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect, useState } from "react";
import { ThirdButton, SubmitButton, CancelButton, MoreButton, DownloadButton, ThirdPopup } from '@/pages/Shared';
import { getTelegramProfile, getTelegramUpdates, loginTelegramClient } from "@/services/modules/telegramclient.service";
import SmallCalender from '@/pages/Admin/Components/Calender/SmallCalender';
import CreateOrderContent from './Compoenent/CreateOrderContent';
import CreateProjectContent from './Compoenent/CreateProjectContent';
import { getOrderListing, verifyToken } from "@/services/modules/admin.service";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


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
    const [createOrderModal, setCreateOrderModal] = useState(false);
    const [user, setUser] = useState(null);
    const [orderListings, setOrderListings] = useState([]);
    const [createProjectModal, setCreateProjectModal] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const navigate = useNavigate();

    /*const loadMessages = async () => {
      const data = await loginTelegramClient()
      console.log(data)
    }*/

    const [time, setTime] = useState({
        year: "",
        month: "",
        day: "",
        daySuffix: "",
        hour: "--",
        minutes: "--",
        seconds: "--",
    });
    const refreshNowTime = () => {
        const interval = setInterval(() => {
            const date = new Date();
            const day = date.getDate();
      
            setTime({
              year: date.getFullYear(),
              month: pad2(date.getMonth() + 1), // JS month is 0-based
              day,
              daySuffix: getDaySuffix(day),
              weekday: getWeekday(date.getDay()),
              hour: pad2(date.getHours()),
              minutes: String(date.getMinutes()).padStart(2, "0"),
              seconds: String(date.getSeconds()).padStart(2, "0"),
            });
        }, 1000);
      
        return () => clearInterval(interval);
    }
    const pad2 = (num) => String(num).padStart(2, "0");
    const getDaySuffix = (day) => {
        switch (day) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }
    const getWeekday = (day) => {
        const weekdays = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
        return weekdays[day];
    }

    const verifyPageToken = async () => {
        try{
            const res = await verifyToken({ token: localStorage.getItem('ACCESS_TOKEN') });
            if (res.status === 200) {
                console.log(res);
              setUser(res.admin);
              console.log(user);
            } else {
              navigate('/admin');
            }
        } catch (err) {
            navigate('/admin');
        }
        
    };

    const getOrderListings = async () => {
        const res = await getOrderListing();
        if (res.status === 200) {
            console.log(res);
            setOrderListings(res.orders);
        } else {
            console.log(res);
            toast.error(res.message);
        }
    }

    const createProject = (order) => {
        setCreateProjectModal(true);
        setCurrentOrder(order);
    }

    useEffect(() => {
        setTopNav(true);
        setLeftNav(false);
        setTopSubNav(false);
        // loadMessages();

        refreshNowTime();
        verifyPageToken();
        getOrderListings();
    }, [])

    return <>
        <div class="page dashboard">
            {/** Banner */}
            <section className="banner">
                <div className="date">
                    <h2>{time.day}<b>{getDaySuffix(time.day)}</b></h2>
                    <div className="info">
                        <h5>{time.weekday}</h5>
                        <span>January</span>
                    </div>
                </div>

                <div className="welcome">
                    <div className="time">{time.hour}<b>:</b>{time.minutes}</div>
                    <div className="main">Welcome Back, {user?.name}</div>
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
                            <ThirdButton onClick={() => setCreateOrderModal(true)}>Create New</ThirdButton>
                            
                        </div>
                    </div>
                    

                    <div class="listing">
                        {orderListings.map((order) => (
                            <div className="each-list" key={order.id}>
                                <div className="info">
                                    <div className="thumbnail">
                                        <img src="https://picsum.photos/200/300" alt="profile" />
                                        <span>{order.admin?.name} <b>({order.admin?.name == user?.name ? 'You' : ''})</b></span>
                                    </div>
                                    <div class="comment">
                                        {order.comments}
                                    </div>
                                    <div class="ticketno">
                                        <div class="highlight">#</div>
                                        <span>{order.ref_ticket}</span>
                                    </div>
                                    <div class="footer">
                                        <span className="date">{moment(order.created_at).format('DD MMM YYYY | HH:mm')}</span>
                                        <div className="action">
                                            <SubmitButton onClick={() => createProject(order)}>Create Project</SubmitButton>
                                            <CancelButton>Delete</CancelButton>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                        {/*<div className="each-list">
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
                        </div>*/}
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

        <ThirdPopup
            isOpen={createOrderModal}
            onClose={() => setCreateOrderModal(false)}
            title="Create New Order"
        >
            <CreateOrderContent />
        </ThirdPopup>

        <ThirdPopup
            isOpen={createProjectModal}
            onClose={() => setCreateProjectModal(false)}
            title="Create New Order"
        >
            <CreateProjectContent order={currentOrder} setCurrentOrder={setCurrentOrder} />
        </ThirdPopup>
    </>;
};
  
export default Dashboard;