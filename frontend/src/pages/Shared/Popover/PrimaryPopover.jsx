import { useEffect, useRef, useState } from 'react';
import mod from './__index__.module.scss';

const DEFAULT_DURATION = 3000;

const PrimaryPopover = ({ children, content, duration = DEFAULT_DURATION }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startCloseTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, duration);
  };

  const openPopover = () => {
    setOpen(true);
    startCloseTimer();
  };

  const handleLeaveAll = () => {
    startCloseTimer();
  };

  useEffect(() => {
    return clearTimer;
  }, []);

  return (
    <div
      className={mod.wrapper}
      onMouseEnter={openPopover}
      onMouseLeave={handleLeaveAll}
    >
      {children}

      {open && (
        <div
          className={mod.popover}
          onMouseEnter={clearTimer}   // 👈 关键
          onMouseLeave={handleLeaveAll}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default PrimaryPopover;
