import { useTranslation } from 'react-i18next';
import '../__index.scss';
const LeftNav = ({ dialog, team, setPeer, currentPeer }) => {
    const { t } = useTranslation();


    return <>
        <section className="left-nav-content-chat">
            <div className="sub-nav-header">
                <i className="mdi mdi-send-circle"></i>
                <span>{t('recent_chat_telegram_private')}</span>
            </div>

            <div className="sub-nav-sect">
                {dialog.map((d, index) => <>
                    <div className="sub-nav-item" key={index}>
                        <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                        <span>@{d.username ?? d.first_name}</span>

                        <div className="marked">
                            <div className='new-dot'></div>
                        </div>
                    </div>
                </>)}
                
            </div>

            <div className='separator'></div>

            <div className="sub-nav-header">
                <i className="mdi mdi-send-circle"></i>
                <span>{t('recent_chat_telegram_team')}</span>
            </div>

            <div className="sub-nav-sect">
                {team.map((d, index) => <>
                    {(d._ == 'chat' || d._ == 'channel') && <>
                        <div className="sub-nav-item" key={index}>
                            <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                            <span>{d.title ?? d.title}</span>

                            <div className="marked">
                                <div className='new-dot'></div>
                            </div>
                        </div>
                    </>}
                    
                </>)}
                
            </div>

            
            
            {/*<div className="sub-nav-item">
                <span>PG Soft</span>
                <div className="marked">
                    <i className="mdi mdi-star"></i>
                    <div className='new-dot'></div>
                </div>
            </div>*/}
            
            
            
            
        </section>
        
    </>;
}

export default LeftNav;