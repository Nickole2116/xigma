import '../index.scss';

const LeftNav = () => {


    return <>
        <section className="left-nav-content">
            <div className="sub-nav-header">
                <i className="mdi mdi-star-four-points-circle"></i>
                <span>Project</span>
            </div>
            <div className="sub-nav-item">
                <span>Maxwell</span>
                <div className="marked">
                    <i className="mdi mdi-star"></i>
                    <div className='new-dot'></div>
                </div>
            </div>
            <div className="sub-nav-item">
                <span>PG Soft</span>
                <div className="marked">
                    <i className="mdi mdi-star"></i>
                    <div className='new-dot'></div>
                </div>
            </div>
            <div className="sub-nav-item">
                <span>Simple Play</span>
            </div>
            <div className="sub-nav-item">
                <span>Maxwell</span>
            </div>
            <div className="separator"></div>

            <div className="sub-nav-header">
                <i className="mdi mdi-shape-plus-outline"></i>
                <span>Type</span>
            </div>
            <div className="sub-nav-item">
                <span>MDI Icon</span>
            </div>
            <div className="sub-nav-item">
                <span>Banner</span>
            </div>
            <div className="sub-nav-item">
                <span>Logo</span>
            </div>
            <div className="sub-nav-item">
                <span>Others</span>
            </div>
        </section>
    </>;
}

export default LeftNav;