import './__index.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect, useState } from 'react';
import { CommentInput } from '@/pages/Shared';
import { getTelegramProfile, getTelegramUpdates, loginTelegramClient, getTelegramDialogs } from "@/services/modules/telegramclient.service";
import { QRCodeCanvas } from "qrcode.react";

// import content
import LeftNav from "./Component/LeftNav";
import { useTranslation } from 'react-i18next';

const Chat = () => {
    const { t } = useTranslation();
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

    const [loginQRDisplay, setLoginQRDisplay] = useState(false);
    const [loginQR, setLoginQR] = useState(null);
    const [dialogList, setDialogsList] = useState([]);
    const [teamList, setTeamList] = useState([]);
    //const [peer, setPeer] = useState(null);

    useEffect(() => {
        loadTelegram();
        setTopNav(true);
        setLeftNav(!loginQRDisplay);
        setTopSubNav(false);
        setLeftNavCon(<LeftNav dialog={dialogList} team={teamList} />);
        
    }, [loginQRDisplay, dialogList]);

    const syncTelegramHistory = async () => {
        const data = await getTelegramDialogs()
        console.log(data);
        setDialogsList(data.users);
        setTeamList(data.chats);
    }

    const loadTelegram = async () => {
      const data = await loginTelegramClient()
      if (!data.isLogined) {
        setLoginQRDisplay(true);
        setLoginQR(data.requestQR);
      } else {
        setLoginQRDisplay(false);
        // view history
        syncTelegramHistory();
      }
    }



    return <>
        {loginQRDisplay ? <>
            <section className='chat-board-login'>
                <div className='qrbox'>
                    <QRCodeCanvas
                        value={loginQR}
                        size={150}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                    />
                </div>
            </section>
            
        
        </> : <>
            <section className='chat-board'>
        
                {/** Reminder Date */}
                <div className="created-date">
                    <div className='line'></div>
                    <span className>20 September 2025, 18:25 {loginQR}</span>
                    <div className='line'></div>
                </div>

                {/** Reminder Text */}
                <div className="reminder">
                    <span className>{t('older_message_need_explore_outside')}</span>
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
                <button className="btn-icon">
                    <i className="mdi mdi-emoticon-outline"></i>
                </button>
                <CommentInput />
                <button className="btn-send">
                    <span>{t('send')}</span>
                    <i className='mdi mdi-send'></i>
                </button>
            </section>
        </>}
        
    </>;
}

export default Chat;