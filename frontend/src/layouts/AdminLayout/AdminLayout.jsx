import { Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AdminLayout = () => {
    const { t } = useTranslation();

    return <>
        {t('welcome')}
        <Outlet/>
    </>;
};
  
export default AdminLayout;