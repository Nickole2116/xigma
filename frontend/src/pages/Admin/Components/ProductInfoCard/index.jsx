import { useState } from "react";
import mod from "./__index.module.scss";

const ProductInfoCard = ({ project }) => {
  

  return (
    <div className={mod.card}>
      {/** Thumbnail Display */}
      <div className={mod.view}>
        <div className={mod.subviewnav}>
          <div className={mod.navbox}>
            <img src="https://picsum.photos/200" alt="nav thumbnail" />
          </div>
          <div className={mod.navbox}>
            <img src="https://picsum.photos/200" alt="nav thumbnail" />
          </div>
          <div className={mod.navbox}>
            <img src="https://picsum.photos/200" alt="nav thumbnail" />
          </div>
        </div>
        <div className={mod.subview}>
          <img src="https://picsum.photos/200" alt="nav thumbnail" />

          <div className={mod.floating}>
            <button className={mod.btn_pin}>
              <i className="mdi mdi-pin-outline"></i>
            </button>
            <button className={mod.btn_download}>
              <i className="mdi mdi-cloud-download-outline"></i>
            </button>
          </div>
        </div>
      </div>

      {/** Comment Section */}
      <div className={mod.contentsection}>
        <nav className={mod.h}>
          <div className={mod.title}>
            <div className={mod.name}>{project.projects_name}</div>
            <div className={mod.date}>{project.projects_name}</div>
          </div>

          <div className={mod.status}>
            <i class="mdi mdi-progress-clock"></i>
            <span>On Progress</span>
          </div>
          
        </nav>
        <div className={mod.c}>
          {/** Chat Room */}
          <div className={mod.chatroom}>
            {/** Chat Box */}
            <div className={mod.chatbox}>
              <div className={mod.comm}>
                <p>testing 123</p>
              </div>
              <div className={mod.actionbar}>
                <div className={mod.info}>
                  <span>2 Comments</span>
                </div>
                <div className={mod.user}>
                  <img src="https://picsum.photos/200" alt="thumbnail" />
                  <img src="https://picsum.photos/200" alt="thumbnail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
