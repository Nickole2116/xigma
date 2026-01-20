import mod from './__index__.module.scss';
import { forwardRef, useState } from 'react';

export const AuthInput = forwardRef(
  ({ InternalLabel, ExternalLabel, Error, isPassword, type, ...props }, ref) => {

    const [viewPassword, setViewPassword] = useState(false);

    return (<>
      <div>
        {ExternalLabel && <>
          <div className={`${mod.AuthInputLabel}`}>
            <span>{ExternalLabel}</span>
          </div>
        </>}

        <div className={mod.AuthInput}>
          {InternalLabel && <label>{InternalLabel}</label>}

          <input type={`${isPassword && viewPassword ? `text` : type}`} ref={ref} {...props} />

          {isPassword && <>
            <button type="button" onClick={() =>{ setViewPassword(!viewPassword) }}>
              <i className={`mdi ${viewPassword ? `mdi-eye` : `mdi-eye-closed`}`}></i>
            </button>
          </>}
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

export default AuthInput;
