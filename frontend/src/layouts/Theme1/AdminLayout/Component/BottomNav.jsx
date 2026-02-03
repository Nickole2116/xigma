
export const BottomNav = ({children}) => {


    return <>
        <nav className="bottom-nav">
            {children ?? <><small>2025 @ Copyright Reserved. For Demo Purpose</small></>}
        </nav>
    </>;
}

export default BottomNav;