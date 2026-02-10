import { useRef, useState } from "react";
import mod from "./__index.module.scss";
import { useTranslation } from "react-i18next";
import { TooltipPopup } from '@/pages/Shared';
import InnerPopupContent from './Components/InnerPopupContent';


const ProductGridCard = ({ project, onDropFile, setInfoPopupContent, setInfoPopup }) => {
  
  const [isDragging, setIsDragging] = useState(false);
  const [innerPopup, setInnerPopup] = useState(false);
  const [innerPopupCon, setInnerPopupCon] = useState(null);
  const dragCounter = useRef(0);
  const { t } = useTranslation();

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    dragCounter.current += 1;
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (!files || !files.length) return;

    const file = files[0];
    onDropFile?.(file, project);
  };

  const handleClick = () => {
    setInfoPopup(true);
    setInfoPopupContent(project);
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
    setInnerPopup(!innerPopup);
    setInnerPopupCon(<InnerPopupContent />);
    
  }

  return (
    <div 
      className={`${mod.card} ${isDragging ? mod.dragging : null} ${project.attachment ? mod.hasAttached : mod.notAttached}`} 
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={mod.head}>
        <span>{project.projects_name}</span>

        <div className={mod.actions}>
          
            <button className={mod.more} onClick={handleInnerClick}>
              <i className="mdi mdi-dots-horizontal"></i>
            </button>
          
        </div>
      </div>

      {project.attachment ? <>
        <div className={`${mod.body}`}>
          <div className={mod.thumbnail}>
            <img
              src={project.attachment}
              alt="thumbnail"
            />
          </div>
        </div>
      </> : <>
        <div className={`${mod.body}`}>
          <div className={mod.thumbnailempty}>
            <i className="mdi mdi-folder"></i>
          </div>
        </div>
      </>}
      

      {isDragging && (
        <div className={mod.dropOverlay}>
          <div className={mod.con}>
            <i className="mdi mdi-database-outline"></i>
            <i className={`mdi mdi-arrow-right-bold ${mod.abs}`}></i>
            <span className={mod.lbl}>{t('drop_here')}</span>
          </div>
        </div>
      )}

      {/** User */}
      <div className={mod.multi_user}>
        <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
        <img src="https://picsum.photos/200" alt="thumbnail" className={mod.thumbnail} />
        <div className={mod.thumbnail}>A</div>
      </div>

      <div className={mod.footer}>
        {/** Comments */}
        <div className={mod.comment}>
          <i className="mdi mdi-message-reply"></i>
          <span className="count">0</span>
        </div>
        <div className={mod.itemcount}>
          <i className="mdi mdi-package-variant-closed"></i>
          <span className="count">0</span>
        </div>
                

        {/** Status Bar */}
        <div className={`${mod.status} ${mod.pending}`}>
          <i className="mdi mdi-progress-clock"></i>
          <span>Proceeding</span>
        </div>
      </div>

      {innerPopup && <>
        <div className={mod.innerPopup}>{innerPopupCon}</div>
      </>}
    </div>
  );
};

export default ProductGridCard;
