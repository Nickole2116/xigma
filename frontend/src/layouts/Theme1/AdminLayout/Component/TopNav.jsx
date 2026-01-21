
export const TopNav = ({children}) => {


    return <>
        <nav className="top-nav">
            {children ? <>{children}</> : <>
                <div class="logo">
                logo
                </div>

                <div class="navigator">
                navigator
                </div>
                <div className="user">
                user
                </div>
            </>}
        </nav>
    </>;
}

export default TopNav;