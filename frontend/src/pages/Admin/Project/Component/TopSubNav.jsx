import '../index.scss';
const LeftSubNav = () => {


    return <>
        <section className="top-sub-nav-content">
            <div className="left"></div>
            <div className="right">
                <button className="btn-layout">
                    <i className='mdi mdi-grid'></i>
                    <span>Mansory</span>
                </button>
                <button className="btn-layout">
                    <i className='mdi mdi-land-rows-horizontal'></i>
                    <span>Row</span>
                </button>

                
            </div>
        </section>
    </>;
}

export default LeftSubNav;