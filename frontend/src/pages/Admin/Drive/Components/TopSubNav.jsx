const TopSubNav = ({ layout , setLayout }) => {

    return <>
        <section className="top-sub-nav-content">
            <div className="left">
                <span>Total Project <b>140</b></span>
            </div>
            <div className="right">
                <button className={`btn-layout ${layout == `mansory` ? `bolded` : null}`} onClick={() => { setLayout('mansory') }}>
                    <i className='mdi mdi-grid'></i>
                    <span>Mansory</span>
                </button>
                <button className={`btn-layout ${layout == `row` ? `bolded` : null}`} onClick={() => { setLayout('row') }}>
                    <i className='mdi mdi-land-rows-horizontal'></i>
                    <span>Row</span>
                </button>

                
            </div>
        </section>
    </>
}

export default TopSubNav;