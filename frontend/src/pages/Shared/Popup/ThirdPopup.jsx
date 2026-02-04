import React from "react";
import mod from "./__index__.module.scss";

const ThirdPopup = ({ isOpen, onClose, title, header, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className={mod.ThirdPopupOverlay} onClick={onClose}>
        <div
            className={mod.ThirdPopupContent}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={mod.ThirdPopupHeader}>
                {header ?? <>
                    <button className={mod.close} onClick={onClose}>✕</button>
                </>}
            </div>

            <div className={mod.ThirdPopupBody}>
                {children}
            </div>

            <div className={mod.ThirdPopupFooter}>
                {footer}
            </div>
        </div>
    </div>
  );
};

export default ThirdPopup;