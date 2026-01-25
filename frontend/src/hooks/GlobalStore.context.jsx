import React, { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ 创建 Context
const GlobalStoreContext = createContext(null);

// 2️⃣ Provider
export const GlobalStoreProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme1");
  const [themeMode, setThemeMode] = useState("day-mode");
  const [isLogined, setIsLogined] = useState(false);

  // Layout Settings
  const [topNav, setTopNav] = useState(false);
  const [topNavCon, setTopNavCon] = useState(null);
  const [leftNav, setLeftNav] = useState(false);
  const [leftNavCon, setLeftNavCon] = useState(null);
  const [rightNav, setRightNav] = useState(false);
  const [rightNavCon, setRightNavCon] = useState(null);
  const [bottomNav, setBottomNav] = useState(false);
  const [bottomNavCon, setBottomNavCon] = useState(null);
  const [topSubNav, setTopSubNav] = useState(false);
  const [topSubNavCon, setTopSubNavCon] = useState(null);
  const [leftSubNav, setLeftSubNav] = useState(false);
  const [leftSubNavCon, setLeftSubNavCon] = useState(null);
  const [rightSubNav, setRightSubNav] = useState(false);
  const [rightSubNavCon, setRightSubNavCon] = useState(null);
  const [bottomSubNav, setBottomSubNav] = useState(true);
  const [bottomSubNavCon, setBottomSubNavCon] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);


  useEffect(() => {

    /** CHECK day/night Mode */
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 19) {
      setThemeMode("night-mode");
    } else {
      setThemeMode("night-mode"); //day-mode
    }
    /** END CHECK day/night Mode */

  }, [setThemeMode]);

  const store = {
    theme, setTheme,
    themeMode, setThemeMode,
    isLogined, setIsLogined,
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
  };

  return (
    <GlobalStoreContext.Provider value={store}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

// 3️⃣ 自定义 Hook
export const useGlobalStore = () => useContext(GlobalStoreContext);
