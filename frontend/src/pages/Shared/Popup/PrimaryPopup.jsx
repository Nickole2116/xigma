import React from "react";
import mod from "./__index__.module.scss";

const PrimaryPopup = ({ isOpen, onClose, title, header, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className={mod.PrimaryPopupOverlay} onClick={onClose}>
        <div
            className={mod.PrimaryPopupContent}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={mod.PrimaryPopupHeader}>
                {header ?? <>
                    <button className={mod.close} onClick={onClose}>✕</button>
                </>}
            </div>

            <div className={mod.PrimaryPopupBody}>
                {children}
            </div>

            <div className={mod.PrimaryPopupFooter}>
                {footer}
            </div>
        </div>
    </div>
  );
};

export default PrimaryPopup;