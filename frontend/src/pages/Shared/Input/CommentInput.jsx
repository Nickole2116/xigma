import mod from './__index__.module.scss';
import { forwardRef, useState } from 'react';

export const CommentInput = forwardRef(
  ({ InternalLabel, ExternalLabel, Error, isPassword, type, ...props }, ref) => {

    const [viewPassword, setViewPassword] = useState(false);

    return (<>
      <div>
        {ExternalLabel && <>
          <div className={`${mod.CommentInputLabel}`}>
            <span>{ExternalLabel}</span>
          </div>
        </>}

        <div className={mod.CommentInput}>
          {InternalLabel && <label>{InternalLabel}</label>}

          <input type={`${isPassword && viewPassword ? `text` : type}`} ref={ref} {...props} />

          {isPassword && <>
            <button type="button" onClick={() =>{ setViewPassword(!viewPassword) }}>
              <i className={`mdi ${viewPassword ? `mdi-eye` : `mdi-eye-closed`}`}></i>
            </button>
          </>}
        </div>

        {Error && <>
          <div className={`${mod.CommentInputError}`}>
            <span>{Error}</span>
          </div>
        </>}
      </div>
      
    </>);
  }
);

export default CommentInput;
