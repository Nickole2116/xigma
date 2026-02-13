import '../index.scss';
import ProductGridCard from '../../Components/ProductGridCard';
import ProductInfoCard from '../../Components/ProductInfoCard';

import { useState } from 'react';
import { PrimaryPopup } from '@/pages/Shared';


const MansoryLayout = ({ projects }) => {

    const [infoPopup, setInfoPopup] = useState(false);
    const [infoPopupContent, setInfoPopupContent] = useState(null);


    return <>
    <div style={{ width: '100%' }}>
        <div class="masonry">

            {projects.map((pro, index) => <>
                <div class="masonry-item" key={index}>
                    <ProductGridCard project={pro} setInfoPopup={setInfoPopup} setInfoPopupContent={setInfoPopupContent} />
                </div>
            </>)}
        </div>

        {projects.length == 0 && <>
            <div className="empty-project">
                <i className='mdi mdi-projector-screen-variant-off'></i>
                <div className='lbl'>No Data Now</div>
            </div>
        </>}
    </div>

    <PrimaryPopup
        isOpen={infoPopup}
        onClose={() => setInfoPopup(false)}
        title="Product Info"
    >
        <ProductInfoCard project={infoPopupContent} />
    </PrimaryPopup>
    
    </>;
}

export default MansoryLayout;