import '../index.scss';

import { useEffect, useState } from "react";
import { getProjects, getCategories, verifyToken } from "@/services/modules/admin.service";


const LeftNav = () => {

    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [cat, setCats] = useState([]);

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
        getCatsListings();
    },[]);


    return <>
        <section className="left-nav-content">
            <div className="sub-nav-header">
                <i className="mdi mdi-star-four-points-circle"></i>
                <span>Project</span>
            </div>

            {projects.map((p) => <>
                <div className="sub-nav-item">
                    <span>{p.projects_name}</span>
                    <div className="marked">
                        {p.isStarred == 1 && <>
                            <i className="mdi mdi-star"></i>
                        </>}
                        <div className='new-dot'></div>
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
            
            <div className="separator"></div>

            <div className="sub-nav-header">
                <i className="mdi mdi-shape-plus-outline"></i>
                <span>Type</span>
            </div>
            {cat.map((ct) => <>
                <div className="sub-nav-item">
                    <span>{ct.category_name}</span>
                </div>
            </>)}
            
        </section>
    </>;
}

export default LeftNav;