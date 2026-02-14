import { useTranslation } from "react-i18next";
import { Route, Link } from "react-router-dom"

const LeftNav = ({ type }) => {

    const { t } = useTranslation();

    return <>
        <section className="left-nav-content-setting">
            <div className="sub-nav-header">
                <i className="mdi mdi-cog"></i>
                <span>{t('main')}</span>
            </div>

            <div className="sub-nav-sect">
                <Link className={`sub-nav-item ${location.pathname === `/admin/general-setting/display` || location.pathname === `/admin/general-setting` ? `bolded` : ``}`} to="/admin/general-setting/display">
                    <i className="mdi mdi-auto-mode icon-icon"></i>
                    <span>{t('display_set')}</span>

                </Link>
                <Link className={`sub-nav-item ${location.pathname === `/admin/general-setting/status` ? `bolded` : ``}`} to="/admin/general-setting/status">
                    <i className="mdi mdi-list-status icon-icon"></i>
                    <span>{t('status_set')}</span>

                    
                </Link>
                <Link className={`sub-nav-item ${location.pathname === `/admin/general-setting/category` ? `bolded` : ``}`} to="/admin/general-setting/category">
                    <i className="mdi mdi-format-list-bulleted-type icon-icon"></i>
                    <span>{t('category_list')}</span>

                    
                </Link>
                <Link className={`sub-nav-item ${location.pathname === `/admin/general-setting/user` ? `bolded` : ``}`} to="/admin/general-setting/user">
                    <i className="mdi mdi-face-agent icon-icon"></i>
                    <span>{t('user_permission')}</span>

                    
                </Link>
            </div>

            <div className={'separator'}></div>

            <div className="sub-nav-header">
                <i className="mdi mdi-dots-grid"></i>
                <span>{t('others')}</span>
            </div>

            <div className="sub-nav-sect">
                <Link className={`sub-nav-item ${location.pathname === `/admin/general-setting/logging` ? `bolded` : ``}`} to="/admin/general-setting/logging">
                    <i className="mdi mdi-ab-testing icon-icon"></i>
                    <span>{t('logging_check')}</span>

                    
                </Link>
                <Link className={`sub-nav-item ${location.pathname === `/admin/general-setting/theme` ? `bolded` : ``}`} to="/admin/general-setting/theme">
                    <i className="mdi mdi-translate icon-icon"></i>
                    <span>{t('text_n_theme')}</span>

                    
                </Link>
               
            </div>

            
            
            {/*<div className="sub-nav-item">
                <span>PG Soft</span>
                <div className="marked">
                    <i className="mdi mdi-star"></i>
                    <div className='new-dot'></div>
                </div>
            </div>*/}
            
            
            
            
        </section> 
    </>
}

export default LeftNav;