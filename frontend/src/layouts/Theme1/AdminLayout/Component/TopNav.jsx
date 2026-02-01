import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export const TopNav = ({children}) => {

    const location = useLocation();
    const { t, i18n } = useTranslation()


    return <>
        <nav className="top-nav">
            {children ? <>{children}</> : <>
                <div class="logo">
                    <img src={`/Logo-01.png`}/>
                </div>

                <div class="navigator">
                    <NavLink className={`nav-item ${location.pathname === `/admin/dashboard` ? `bolded` : ``}`} to="/admin/dashboard">
                        
                        <span>{t('dashboard')}</span>
                        <div className="line"></div>
                    </NavLink>

                    <Link className={`nav-item ${location.pathname === `/admin/project` ? `bolded` : ``}`} to="/admin/project">
                        
                        <span>{t('project')}</span>
                        <div className="line"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/chat` ? `bolded` : ``}`} to="/admin/chat">
                        
                        <span>{t('chats')}</span>
                        <div className="line"></div>
                        <div class="badget"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/drive` ? `bolded` : ``}`} to="/admin/drive">
                        
                        <span>{t('drive')}</span>
                        <div className="line"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/finance` ? `bolded` : ``}`} to="/admin/finance">
                        
                        <span>{t('finance')}</span>
                        <div className="line"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/theme` ? `bolded` : ``}`} to="/admin/theme">
                        
                        <span>{t('theme')}</span>
                        <div className="line"></div>
                    </Link>
                </div>
                <div className="user">
                    <Link className="btn-settings" to="/admin/general-setting">
                        <i className="mdi mdi-cog"></i>
                    </Link>

                    <Link className="btn-notify">
                        <i className="mdi mdi-bell"></i>
                        <div class="badget"></div>
                    </Link>

                    <Link className="btn-theme">
                        <i className="mdi mdi-brightness-6"></i>
                    </Link>

                    <Link className="btn-user">
                        <img src="/images/shared/flag-icon/cny.webp" />
                        <span>{t('key')}</span>
                    </Link>

                    
                </div>
            </>}
        </nav>
    </>;
}

export default TopNav;