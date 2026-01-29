import '../index.scss';
import ProductGridCard from '../../Components/ProductGridCard';

const MansoryLayout = () => {


    return <>
    <div class="masonry">
        <div class="masonry-item">
            <ProductGridCard />
        </div>
        <div class="masonry-item">
            <ProductGridCard />
        </div>
        <div class="masonry-item">
            <ProductGridCard />
        </div>
        <div class="masonry-item">
            <ProductGridCard />
        </div>
        <div class="masonry-item">
            <ProductGridCard />
        </div>
    </div>
    </>;
}

export default MansoryLayout;