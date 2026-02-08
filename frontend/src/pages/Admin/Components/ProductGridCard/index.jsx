import { useState } from "react";
import mod from "./__index.module.scss";

const ProductGridCard = ({ project, onDropFile, setInfoPopupContent, setInfoPopup }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault(); // ⭐ 必须
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (!files || !files.length) return;

    const file = files[0]; // 只拿第一个
    console.log("Dropped file:", file);

    // 往父层丢（推荐）
    onDropFile?.(file, project);
  };

  const handleClick = () => {
    setInfoPopup(true);
    setInfoPopupContent(project);    
  }

  return (
    <div className={mod.card} onClick={handleClick}>
      <div className={mod.head}>
        <span>{project.projects_name}</span>
      </div>

      <div
        className={`${mod.body} ${isDragging ? mod.dragging : ""}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className={mod.thumbnail}>
          <img
            src={project.attachment || "https://picsum.photos/200"}
            alt="thumbnail"
          />

          {isDragging && (
            <div className={mod.dropOverlay}>
              Drop file here
            </div>
          )}
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
  );
};

export default ProductGridCard;
