import '../__index.scss';
const LeftSubNav = () => {


    return <>
        <section className="left-sub-nav-content">
            
            <div className="sub-nav-item">
                <img src={`/images/shared/telegram.png`} className={`img-icon`}/>
                <span>@pixelKyo</span>

                <div className={'new-dot'}></div>
            </div>
            <div className="sub-nav-item">
                <span>@Goh Sheng</span>
            </div>
            <div className="sub-nav-item">
                <span>@jena_is_niko</span>
            </div>
            <div className="sub-nav-item">
                <span>@Wayne</span>
            </div>
            <div className="sub-nav-item">
                <span>@WinnerGoh</span>
            </div>

        </section>
    </>;
}

export default LeftSubNav;