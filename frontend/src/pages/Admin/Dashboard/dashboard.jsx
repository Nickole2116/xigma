import { useGlobalStore } from "@/hooks/GlobalStore.context";

const Dashboard = () => {
    const { theme, setTheme, isLogined, setIsLogined } = useGlobalStore();

    return <>
        {theme}
        this is test dashboard
    </>;
};
  
export default Dashboard;