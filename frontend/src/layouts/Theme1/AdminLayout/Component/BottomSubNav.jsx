
export const BottomSubNav = ({children}) => {


    return <>
        <nav className="bottom-sub-nav">
            {children ? <>{children}</> : <>
                <small>2025 @ Copyright Reserved. For Demo Purpose</small>
            </>}
        </nav>
    </>;
}

export default BottomSubNav;