import { useEffect } from 'react';
import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { ThirdButton, SubmitButton, CancelButton, MoreButton, DownloadButton } from '@/pages/Shared';
// import content
import LeftSubNav from "./Component/LeftSubNav";

const Finance = () => {

    const list = [
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
        'Apple', 'Banana', 'Orange', 'Pinapple', 'Kiwi', 'Strawberry', 'Grape', 'Grapefruit',
    ];

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


    useEffect(() => {
        setTopNav(true);
        setLeftSubNav(true);
        setLeftSubNavCon(<LeftSubNav />);
    }, []);


    return <>
        {list.map((item, index) => (
        <div key={index}>{item}</div>
        ))} 
    </>;
}


export default Finance;