import { useState } from "react";
import TelegramLoginButton from "./TelegramLoginButton";
import mod from '../../login.module.scss';


export const TelegramLogin = () => {

    const {user , setUser} = useState({
        "id": 123456789,
        "first_name": "Nickole",
        "last_name": "Tan",
        "username": "nickole123",
        "photo_url": "https://t.me/i/userpic/320/nickole_profile.jpg",
        "auth_date": 1705507200,
        "hash": "a1b2c3d4e5f6g7h8i9j0"
    });
    const isSecureConnection = window.location.protocol === "https:";

    return <>

        {isSecureConnection ? (
            <TelegramLoginButton
                botName="xigma2nickole_bot" // 例如 "MyTestBot"
                onAuth={(user) => {
                    setUser(user);
                }}
            />
        ) : (
            <img src={`/images/shared/telegram.png`} className={mod.animatedThumbnail}/>
        )}
        
    </>;
}

export default TelegramLogin;