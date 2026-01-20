
import mod from './__index__.module.scss';
import { forwardRef, useState } from 'react';

export const SubmitButton = forwardRef(
  ({ children, onClick, isLoading, ...props }, ref) => {

    return <>
      <button className={`${mod.SubmitButton} ${isLoading && `loading`}`} onClick={onClick} {...props}>
        {isLoading && <>
          <img src={`/images/shared/small-indicator.gif`} className={`indicator`}/>
        </>}
        {children}
      </button>
    </>;
 }
);

export default SubmitButton;