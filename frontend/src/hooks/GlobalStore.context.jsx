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
  const [topNavCon, setTopNavCon] = useState(<>123</>);
  const [leftNav, setLeftNav] = useState(false);
  const [rightNav, setRightNav] = useState(false);
  const [bottomNav, setBottomNav] = useState(false);
  const [topSubNav, setTopSubNav] = useState(false);
  const [leftSubNav, setLeftSubNav] = useState(false);
  const [rightSubNav, setRightSubNav] = useState(false);
  const [bottomSubNav, setBottomSubNav] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);


  useEffect(() => {

    /** CHECK day/night Mode */
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 19) {
      setThemeMode("night-mode");
    } else {
      setThemeMode("day-mode");
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
    rightNav, setRightNav,
    bottomNav, setBottomNav,
    topSubNav, setTopSubNav,
    leftSubNav, setLeftSubNav,
    rightSubNav, setRightSubNav,
    bottomSubNav, setBottomSubNav,
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
