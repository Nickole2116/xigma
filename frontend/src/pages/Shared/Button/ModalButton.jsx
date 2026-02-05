import { forwardRef, useState } from 'react';
import mod from './__index__.module.scss';

export const ModalButton = forwardRef(
  (
    {
      children,
      onClick,
      tooltip = '',
      pending = false,
      clickable = true,
      type = 'button',
      className = '',
    },
    ref
  ) => {
    const [showTip, setShowTip] = useState(false);
    const disabled = pending || !clickable;

    return (
      <div
        className={mod.wrapper}
        onMouseEnter={() => tooltip && setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        <button
          ref={ref}
          type={type}
          disabled={disabled}
          onClick={!disabled ? onClick : undefined}
          className={`
            ${mod.ModalButton}
            ${disabled ? mod.disabled : ''}
            ${pending ? mod.pending : ''}
            ${className}
          `}
        >
          {pending ? <span className={mod.loader} /> : children}
        </button>

        {tooltip && (
          <div className={`${mod.tooltip} ${showTip ? mod.show : ''}`}>
            {tooltip}
          </div>
        )}
      </div>
    );
  }
);

export default ModalButton;
