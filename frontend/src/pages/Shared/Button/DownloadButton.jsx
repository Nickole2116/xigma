
import mod from './__index__.module.scss';
import { forwardRef, useState } from 'react';

export const DownloadButton = forwardRef(
  ({ children, onClick, isLoading, ...props }, ref) => {

    return <>
      <button className={`${mod.DownloadButton} ${isLoading && `loading`}`} onClick={onClick} {...props}>
        {isLoading && <>
          <img src={`/images/shared/small-indicator.gif`} className={`indicator`}/>
        </>}
        {children}
      </button>
    </>;
 }
);

export default DownloadButton;