import '../index.scss';

import { useState } from 'react';

const LeftSubNav = () => {

    const [mode, setMode] = useState('mansory');


    return <>
        <section className="top-sub-nav-content">
            <div className="left">
                <span>Total Project <b>140</b></span>
            </div>
            <div className="right">
                <button className={`btn-layout ${mode == `mansory` ? `bolded` : null}`} onClick={() => { setMode('mansory') }}>
                    <i className='mdi mdi-grid'></i>
                    <span>Mansory</span>
                </button>
                <button className={`btn-layout ${mode == `row` ? `bolded` : null}`} onClick={() => { setMode('row') }}>
                    <i className='mdi mdi-land-rows-horizontal'></i>
                    <span>Row</span>
                </button>

                
            </div>
        </section>
    </>;
}

export default LeftSubNav;