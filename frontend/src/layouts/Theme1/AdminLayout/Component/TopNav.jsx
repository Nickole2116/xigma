import { Link } from "react-router-dom";

export const TopNav = ({children}) => {


    return <>
        <nav className="top-nav">
            {children ? <>{children}</> : <>
                <div class="logo">
                    <img src={`/Logo-01.png`}/>
                </div>

                <div class="navigator">
                    <Link className="nav-item bolded">
                        
                        <span>Dashboard</span>
                        <div className="line"></div>
                    </Link>

                    <Link className="nav-item">
                        
                        <span>Product</span>
                        <div className="line"></div>
                    </Link>

                    <Link className="nav-item">
                        
                        <span>Chats</span>
                        <div className="line"></div>
                        <div class="badget"></div>
                    </Link>

                    <Link className="nav-item">
                        
                        <span>Drive</span>
                        <div className="line"></div>
                    </Link>

                    <Link className="nav-item">
                        
                        <span>My Bills</span>
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
                </div>
            </>}
        </nav>
    </>;
}

export default TopNav;