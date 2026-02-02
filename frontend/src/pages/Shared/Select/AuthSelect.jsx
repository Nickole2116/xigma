import mod from './__index__.module.scss';
import { forwardRef, useState } from 'react';

export const AuthSelect = forwardRef(
  ({ InternalLabel, ExternalLabel, Error, children, ...props }, ref) => {

    return (<>
      <div>
        {ExternalLabel && <>
          <div className={`${mod.AuthInputLabel}`}>
            <span>{ExternalLabel}</span>
          </div>
        </>}

        <div className={mod.AuthInput}>
            {InternalLabel && <label>{InternalLabel}</label>}

            <select
                ref={ref}
                {...props}
            >
                {children}
            </select>

        </div>

        {Error && <>
          <div className={`${mod.AuthInputError}`}>
            <span>{Error}</span>
          </div>
        </>}
      </div>
      
    </>);
  }
);

export default AuthSelect;
