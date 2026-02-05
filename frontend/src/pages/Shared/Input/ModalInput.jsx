import mod from './__index__.module.scss';
import { forwardRef } from 'react';

export const ModalInput = forwardRef(
  ({ InternalLabel, ExternalLabel, Error, type, ...props }, ref) => {

    return (<>
      <div>
        {ExternalLabel && <>
          <div className={`${mod.ModalInputLabel}`}>
            <span>{ExternalLabel}</span>
          </div>
        </>}

        <div className={mod.ModalInput}>
          {InternalLabel && <label>{InternalLabel}</label>}

          <input type={`${type}`} ref={ref} {...props} />

        </div>

        {Error && <>
          <div className={`${mod.ModalInputError}`}>
            <span>{Error}</span>
          </div>
        </>}
      </div>
      
    </>);
  }
);

export default ModalInput;
