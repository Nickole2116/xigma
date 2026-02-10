import { useTranslation } from 'react-i18next';
import '../index.scss';


const LeftSubNav = ({ mode, setMode }) => {

    const { t } = useTranslation();



    return <>
        <section className="top-sub-nav-content">
            <div className="left">
                <span>Total Project <b>140</b></span>
            </div>
            <div className="right">
                <button className={`btn-layout ${mode == `mansory` ? `bolded` : null}`} onClick={() => { setMode('mansory') }}>
                    <i className='mdi mdi-periodic-table'></i>
                    <span>{t('masonry')}</span>
                </button>
                <button className={`btn-layout ${mode == `row` ? `bolded` : null}`} onClick={() => { setMode('row') }}>
                    <i className='mdi mdi-dns-outline'></i>
                    <span>{t('listrow')}</span>
                </button>

                
            </div>
        </section>
    </>;
}

export default LeftSubNav;