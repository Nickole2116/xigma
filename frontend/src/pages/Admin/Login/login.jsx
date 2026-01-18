import './login.scss';
import { useGlobalStore } from "@/hooks/GlobalStore.context";

//Content
import Checks from "./content/Checks";
import ManualLogin from "./content/ManualLogin";
import TelegramLogin from "./content/TelegramLogin";


export const Login = () => {
    const { themeMode, setThemeMode, isLogined, setIsLogined } = useGlobalStore();


    return <>
        <div className={`fullpage flex-center ${themeMode}`}>
            {/*<TelegramLogin />*/}
            <ManualLogin />
        </div>
    </>;
}

export default Login;