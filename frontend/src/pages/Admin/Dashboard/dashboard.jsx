import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from "react";

const Dashboard = () => {
    const { theme, setTheme, isLogined, setIsLogined } = useGlobalStore();

    const sendMessage = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/telegram/bot/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: '5964748247',
              text: 'Hello from React + Laravel!',
            }),
          });
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
    };

    const getUpdates = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/telegram/bot/updates');
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
    };

    const getTelegramMe = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/telegram/bot/getMe');
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        getUpdates();
        getTelegramMe();
        sendMessage();
    }, [])

    return <>
        {theme}
        <div className="flex">this is test dashboard</div>
    </>;
};
  
export default Dashboard;