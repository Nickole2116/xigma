import React from "react";
import mod from "./__index__.module.scss";

const TooltipPopup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className={mod.TooltipPopupOverlay}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <div
          className={mod.TooltipPopupContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={mod.TooltipPopupBody}>
            {children}
          </div>
        </div>
      </div>
    );
};
  
export default TooltipPopup;