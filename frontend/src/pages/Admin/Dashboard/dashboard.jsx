import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from "react";
import { getTelegramProfile, getTelegramUpdates, loginTelegramClient } from "@/services/modules/telegramclient.service";

const Dashboard = () => {
    const { theme, setTheme, isLogined, setIsLogined } = useGlobalStore();


    const loadMessages = async () => {
      const data = await loginTelegramClient()
      console.log(data)
    }

    useEffect(() => {
        loadMessages();
    }, [])

    return <>
        {theme}
        <div className="flex">this is test dashboard</div>
    </>;
};
  
export default Dashboard;