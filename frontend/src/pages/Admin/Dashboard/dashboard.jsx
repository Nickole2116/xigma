import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from "react";
import { getTelegramProfile, getTelegramUpdates } from "@/services/modules/telegramclient.service";

const Dashboard = () => {
    const { theme, setTheme, isLogined, setIsLogined } = useGlobalStore();


    const loadMessages = async () => {
      const data = await getTelegramUpdates()
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