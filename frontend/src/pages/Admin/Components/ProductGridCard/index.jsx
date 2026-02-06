import mod from './__index.module.scss';

const ProductGridCard = ({ project }) => {

    return <>
        <div className={mod.card}>
            <div className={mod.head}>
                <span>{project.projects_name}</span>
                <div className={mod.actions}>
                    <button className={mod.more}>
                        <i className="mdi mdi-dots-horizontal"></i>
                    </button>
                </div>
            </div>
            <div className={mod.body}>
                <div className={mod.thumbnail}>
                    <img src={project.attachment ?? `https://picsum.photos/200`} alt="thumbnail" />
                    
                    
                </div>
            </div>
            <div className={mod.footer}>
                {/** User */}
                <div className={mod.thumbnail}>
                    <img src="https://picsum.photos/200" alt="thumbnail" />
                </div>

                {/** Comments */}
                <div className={mod.comment}>
                    <i className="mdi mdi-message-reply"></i>
                    <span className="count">3</span>
                </div>
                <div className={mod.itemcount}>
                    <i className="mdi mdi-package-variant-closed"></i>
                    <span className="count">3</span>
                </div>
                

                {/** Status Bar */}
                <div className={mod.status}>
                    <i className="mdi mdi-progress-clock"></i>
                    <span>On Progress</span>
                </div>
            </div>
        </div>
    </>;
}

export default ProductGridCard;