import mod from './__index__.module.scss';

export const AuthButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick} className={`${mod.auth}`}>
      {children}
    </button>
    </>;
}

export default AuthButton;