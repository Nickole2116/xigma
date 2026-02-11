import { useState } from "react";
import mod from "./__index.module.scss";

const ProductInfoCard = ({ project }) => {
  const [targetID, setTargetID] = useState(project.items[0]?.id);
  const [targetSource, setTargetSource] = useState(project.items[0]?.path);

  const setItem = (p) => {
    setTargetID(p?.id);
    setTargetSource(p?.path);
  }


  return (
    <div className={mod.card}>
      {/** Thumbnail Display */}
      {project.items.length > 0 && <>
        <div className={mod.view}>
        
          <div className={mod.subviewnav}>

            {project.items.map((p, index) => <>
              <div className={`${mod.navbox} ${targetID == p.id ? mod.selected : null}`} key={index} onClick={() => setItem(p)}>
                <img src={p.path} alt="nav thumbnail" />
              </div>
            </>)}
            {/*<div className={mod.navbox}>
              <img src="https://picsum.photos/200" alt="nav thumbnail" />
            </div>*/}
          </div>
      
        <div className={mod.subview}>
          <img src={targetSource} alt="nav thumbnail" />

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
      </>}
      

      {/** Comment Section */}
      <div className={mod.contentsection}>
        <nav className={mod.h}>
          <div className={mod.title}>
            <div className={mod.name}>{project.projects_name}</div>
            <div className={mod.date}>{project.projects_name}</div>
          </div>

          <div className={`${mod.status} ${mod.pending}`}>
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
                <div className={mod.date}>03 Dec 2026, 13:48</div>
                <p>This is Test Case Paragraphs.</p>
              </div>
              <div className={mod.actionbar}>
                <div className={mod.info}>
                  {/*<button>
                    <i className="mdi mdi-reply"></i>
                  </button>*/}

                  <span>
                    <i className="mdi mdi-message-reply"></i>
                    <span className="count">0</span>
                  </span>
                  
                </div>
                <div className={mod.user}>
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                </div>
              </div>
            </div>

            {/** Chat Box */}
            <div className={mod.chatbox}>
              <div className={mod.comm}>
                <div className={mod.date}>03 Dec 2026, 13:48</div>
                <p>This is Test Case Paragraphs.</p>
              </div>
              <div className={mod.actionbar}>
                <div className={mod.info}>
                  {/*<button>
                    <i className="mdi mdi-reply"></i>
                  </button>*/}

                  <span>
                    <i className="mdi mdi-message-reply"></i>
                    <span className="count">0</span>
                  </span>
                  
                </div>
                <div className={mod.user}>
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                </div>
              </div>
            </div>

            {/** Chat Box */}
            <div className={mod.chatbox}>
              <div className={mod.comm}>
                <div className={mod.date}>03 Dec 2026, 13:48</div>
                <p>This is Test Case Paragraphs.</p>
              </div>
              <div className={mod.actionbar}>
                <div className={mod.info}>
                  {/*<button>
                    <i className="mdi mdi-reply"></i>
                  </button>*/}

                  <span>
                    <i className="mdi mdi-message-reply"></i>
                    <span className="count">0</span>
                  </span>
                  
                </div>
                <div className={mod.user}>
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                </div>
              </div>
            </div>

            {/** Chat Box */}
            <div className={mod.chatbox}>
              <div className={mod.comm}>
                <div className={mod.date}>03 Dec 2026, 13:48</div>
                <p>This is Test Case Paragraphs.</p>
              </div>
              <div className={mod.actionbar}>
                <div className={mod.info}>
                  {/*<button>
                    <i className="mdi mdi-reply"></i>
                  </button>*/}

                  <span>
                    <i className="mdi mdi-message-reply"></i>
                    <span className="count">0</span>
                  </span>
                  
                </div>
                <div className={mod.user}>
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                  <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
                </div>
              </div>
            </div>

            {/** Chat Typing Box */}
            <div className={mod.chattype}>
              <input />
              <button className={mod.btn_send}>
                <i className="mdi mdi-send"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
