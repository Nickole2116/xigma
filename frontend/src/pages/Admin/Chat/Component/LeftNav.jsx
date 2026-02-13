import { useTranslation } from 'react-i18next';
import '../__index.scss';
const LeftNav = () => {
    const { t } = useTranslation();


    return <>
        <section className="left-nav-content-chat">
            <div className="sub-nav-header">
                <i className="mdi mdi-send-circle"></i>
                <span>{t('recent_chat_telegram')}</span>
            </div>

            <div className="sub-nav-sect">
                <div className="sub-nav-item">
                    <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                    <span>@pixelKyo</span>

                    <div className="marked">
                        <i className="mdi mdi-star"></i>
                        <div className='new-dot'></div>
                    </div>
                </div>
                <div className="sub-nav-item">
                    <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                    <span>@pixelKyo</span>

                    <div className={'new-dot'}></div>
                </div>
                <div className="sub-nav-item">
                    <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                    <span>@pixelKyo</span>

                    <div className={'new-dot'}></div>
                </div>
                <div className="sub-nav-item">
                    <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                    <span>@pixelKyo</span>

                    <div className={'new-dot'}></div>
                </div>
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