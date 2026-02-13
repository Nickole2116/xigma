import '../index.scss';

import { useEffect, useState, useTransition } from "react";
import { getProjects, getCategories, getPNCs, verifyToken } from "@/services/modules/admin.service";
import { useTranslation } from 'react-i18next';


const LeftNav = () => {
    const {t} = useTranslation();
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [cat, setCats] = useState([]);
    const [pncs, setPncs] = useState([]);

    const verifyPageToken = async () => {
        try{
            const res = await verifyToken({ token: localStorage.getItem('ACCESS_TOKEN') });
            if (res.status === 200) {
              setUser(res.admin);
            } else {
              navigate('/admin');
            }
        } catch (err) {
            navigate('/admin');
        }
        
    };

    const getProjectListings = async () => {
        const res = await getProjects();
        if (res.status === 200) {
            console.log(res);
            setProjects(res.project);
        } else {
            //error
        }
    }

    const getPNCListings = async () => {
        const res = await getPNCs();
        if (res.status === 200) {
            console.log(res);
            setPncs(res.pncs);
        } else {
            //error
        }
    }

    const getCatsListings = async () => {
        const res = await getCategories();
        if (res.status === 200) {
            console.log(res);
            setCats(res.category);
        } else {
            //error
        }
    }

    useEffect(() => {
        verifyPageToken();
        getProjectListings();
        getPNCListings();
        getCatsListings();
    },[]);


    return <>
        <section className="left-nav-content-project">
            <div className="sub-nav-header">
                <i className="mdi mdi-account-tie"></i>
                <span>{t('related_pnc')}</span>

                <i className='mdi mdi-chevron-down ml-auto'></i>
            </div>

            <div className="sub-nav-sect">
                {pncs.map((p) => <>
                    <div className="sub-nav-item">
                        <span>{p.name}</span>
                        <div className="marked">
                            {p.isStarred == 1 && <>
                                <i className="mdi mdi-star"></i>
                            </>}
                            {p.isNew == 1 && <>
                                <div className='new-dot'></div>
                            </>}
                        </div>
                    </div>
                </>)}

                {/*<div className="sub-nav-item">
                    <span>PG Soft</span>
                    <div className="marked">
                        <i className="mdi mdi-star"></i>
                        <div className='new-dot'></div>
                    </div>
                </div>*/}
            </div>

            
            
            {/*<div className="sub-nav-item">
                <span>PG Soft</span>
                <div className="marked">
                    <i className="mdi mdi-star"></i>
                    <div className='new-dot'></div>
                </div>
            </div>*/}
            
            <div className="separator"></div>

            <div className="sub-nav-header">
                <i className="mdi mdi-relation-one-to-one-or-many"></i>
                <span>{t('related_client')}</span>

                <i className='mdi mdi-chevron-down ml-auto'></i>
            </div>

            <div className="sub-nav-sect">
                {pncs.map((p) => <>
                    <div className="sub-nav-item">
                        <span>{p.name}</span>
                        <div className="marked">
                            {p.isStarred == 1 && <>
                                <i className="mdi mdi-star"></i>
                            </>}
                            {p.isNew == 1 && <>
                                <div className='new-dot'></div>
                            </>}
                        </div>
                    </div>
                </>)}

                

                {/*<div className="sub-nav-item">
                    <span>PG Soft</span>
                    <div className="marked">
                        <i className="mdi mdi-star"></i>
                        <div className='new-dot'></div>
                    </div>
                </div>*/}
            </div>

            <div className="separator"></div>

            <div className="sub-nav-header">
                <i className="mdi mdi-shape-plus-outline"></i>
                <span>{t('type')}</span>

                <i className='mdi mdi-chevron-down ml-auto'></i>
            </div>
            <div className="sub-nav-sect">
                {cat.map((ct) => <>
                    <div className="sub-nav-item">
                        <span>{ct.category_name}</span>
                    </div>
                </>)}
            </div>
            
            
        </section>
    </>;
}

export default LeftNav;