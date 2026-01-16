import { useGlobalStore } from "@/hooks/GlobalStore.context";
import { useEffect } from "react";

const Dashboard = () => {
    const { theme, setTheme, isLogined, setIsLogined } = useGlobalStore();

    const sendMessage = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/telegram/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: 'YOUR_CHAT_ID',
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
          const res = await fetch('http://localhost:8000/api/telegram/updates');
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
    };

    const getTelegramMe = async () => {
        try {
          const res = await fetch('http://localhost:8000/api/telegram/getMe');
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        getUpdates();
        getTelegramMe();
    }, [])

    return <>
        {theme}
        <div className="flex">this is test dashboard</div>
    </>;
};
  
export default Dashboard;