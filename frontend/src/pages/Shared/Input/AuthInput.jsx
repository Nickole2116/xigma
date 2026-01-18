import mod from './__index__.module.scss';
import { forwardRef } from 'react';

export const AuthInput = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <div className={mod.wrapper}>
        {label && <label>{label}</label>}

        <input ref={ref} {...props} />

        {error && <p className={mod.error}>{error}</p>}
      </div>
    );
  }
);

export default AuthInput;
