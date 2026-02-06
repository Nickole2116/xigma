import '../index.scss';
import ProductGridCard from '../../Components/ProductGridCard';

const MansoryLayout = ({ projects }) => {


    return <>
    <div style={{ width: '100%' }}>
        <div class="masonry">
            {projects.map((pro, index) => <>
                <div class="masonry-item" key={index}>
                    <ProductGridCard project={pro} />
                </div>
            </>)}
        </div>
    </div>
    
    </>;
}

export default MansoryLayout;