import './__index.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from 'react';
import { CommentInput } from '@/pages/Shared';


// import content
import LeftSubNav from "./Component/LeftSubNav";

const Chat = () => {
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
        setLeftSubNav(true);
        setLeftSubNavCon(<LeftSubNav />);
    }, []);



    return <>
        <section className='chat-board'>
            {/** Reminder Date */}
            <div className="created-date">
                <div className='line'></div>
                <span className>20 September 2025, 18:25</span>
                <div className='line'></div>
            </div>

            {/** Reminder Text */}
            <div className="reminder">
                <span className>Older Messages need to be explore in Telegram App</span>
            </div>
            <div className="row">
                <div className="chat">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" alt="commentimage" />
                    </div>
                    <p className="text">Hi, this is Stacey. Can you have to follow up on this case?</p>
                    <small className="date">
                        Today, 00:10
                    </small>
                </div>

                <div className="chat me">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" alt="commentimage" />
                    </div>
                    <p className="text">Hi, this is Stacey. Can you have to follow up on this case?</p>
                    <small className="date">
                        Today, 00:10
                    </small>
                </div>

                <div className="chat">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/200" alt="commentimage" />
                    </div>
                    <p className="text">Hi, this is Stacey. Can you have to follow up on this case?</p>
                    <small className="date">
                        Today, 00:10
                    </small>
                </div>
            </div>
        </section>

        <section className="chat-texting">
            <button className="btn-add">
                <i className="mdi mdi-plus-thick"></i>
            </button>
            <button className="btn-add">
                <i className="mdi mdi-plus-thick"></i>
            </button>
            <CommentInput />
            <button className="btn-send">Send</button>
        </section>
    </>;
}

export default Chat;