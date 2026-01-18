import React, { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ 创建 Context
const GlobalStoreContext = createContext(null);

// 2️⃣ Provider
export const GlobalStoreProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme1");
  const [themeMode, setThemeMode] = useState("day-mode");
  const [isLogined, setIsLogined] = useState(false);

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
    theme,
    setTheme,
    themeMode,
    setThemeMode,
    isLogined,
    setIsLogined,
  };

  return (
    <GlobalStoreContext.Provider value={store}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

// 3️⃣ 自定义 Hook
export const useGlobalStore = () => useContext(GlobalStoreContext);
