import { Link, NavLink, useLocation } from "react-router-dom";

export const TopNav = ({children}) => {

    const location = useLocation();

    return <>
        <nav className="top-nav">
            {children ? <>{children}</> : <>
                <div class="logo">
                    <img src={`/Logo-01.png`}/>
                </div>

                <div class="navigator">
                    <NavLink className={`nav-item ${location.pathname === `/admin/dashboard` ? `bolded` : ``}`} to="/admin/dashboard">
                        
                        <span>Dashboard</span>
                        <div className="line"></div>
                    </NavLink>

                    <Link className={`nav-item ${location.pathname === `/admin/project` ? `bolded` : ``}`} to="/admin/project">
                        
                        <span>Project</span>
                        <div className="line"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/chat` ? `bolded` : ``}`} to="/admin/chat">
                        
                        <span>Chats</span>
                        <div className="line"></div>
                        <div class="badget"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/drive` ? `bolded` : ``}`} to="/admin/drive">
                        
                        <span>Drive</span>
                        <div className="line"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/finance` ? `bolded` : ``}`} to="/admin/finance">
                        
                        <span>My Bills</span>
                        <div className="line"></div>
                    </Link>

                    <Link className={`nav-item ${location.pathname === `/admin/theme` ? `bolded` : ``}`} to="/admin/theme">
                        
                        <span>Theme</span>
                        <div className="line"></div>
                    </Link>
                </div>
                <div className="user">
                    <Link className="btn-settings">
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
                        <span>English</span>
                    </Link>

                    
                </div>
            </>}
        </nav>
    </>;
}

export default TopNav;