import { useEffect } from "react";

export const TelegramLoginButton = ({ botName, onAuth }) => {
  useEffect(() => {
    // 动态加载 Telegram 登录脚本
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?15";
    script.async = true;
    script.setAttribute("data-telegram-login", botName); // 你的 bot 用户名
    script.setAttribute("data-size", "large"); // large / medium / small
    script.setAttribute("data-radius", "12"); // 按钮圆角
    script.setAttribute("data-auth-url", ""); // 留空，因为我们用 onAuth 回调
    script.setAttribute("data-request-access", "write"); // 可选
    script.setAttribute("data-userpic", "false"); // 是否显示头像
    script.setAttribute("data-lang", "en"); // 语言

    // 当用户登录成功时，Telegram 会触发 window.TelegramLoginWidget
    window.TelegramLoginWidget = function(user) {
      console.log("Telegram user:", user);
      if (onAuth) onAuth(user); // 回调给父组件
    };

    const container = document.getElementById("telegram-login-container");
    container.appendChild(script);

    // 清理
    return () => {
      container.innerHTML = "";
      delete window.TelegramLoginWidget;
    };
  }, [botName, onAuth]);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLoginButton;
