import React from "react";
import mod from "./__index__.module.scss";

const AuthPopup = ({ isOpen, onClose, title, header, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className={mod.AuthPopupOverlay} onClick={onClose}>
        <div
            className={mod.AuthPopupContent}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={mod.AuthPopupHeader}>
                {header ?? <>
                    <button className={mod.close} onClick={onClose}>✕</button>
                </>}
            </div>

            <div className={mod.AuthPopupBody}>
                {children}
            </div>

            <div className={mod.AuthPopupFooter}>
                {footer}
            </div>
        </div>
    </div>
  );
};

export default AuthPopup;