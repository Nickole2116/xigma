import { useTranslation } from "react-i18next"

const TopSubNav = ({ layout , setLayout }) => {
    const { t } = useTranslation();

    return <>
        <section className="top-sub-nav-content">
            <div className="left">
                <span>Total Project <b>140</b></span>
            </div>
            <div className="right">
                <button className={`btn-layout ${layout == `mansory` ? `bolded` : null}`} onClick={() => { setLayout('mansory') }}>
                    <i className='mdi mdi-periodic-table'></i>
                    <span>{t('masonry')}</span>
                </button>
                <button className={`btn-layout ${layout == `row` ? `bolded` : null}`} onClick={() => { setLayout('row') }}>
                    <i className='mdi mdi-land-rows-horizontal'></i>
                    <span>{t('listrow')}</span>
                </button>

                
            </div>
        </section>
    </>
}

export default TopSubNav;