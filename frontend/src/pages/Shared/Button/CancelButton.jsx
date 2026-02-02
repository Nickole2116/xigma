import mod from './__index__.module.scss';

export const CancelButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick} className={`${mod.CancelButton}`}>
      {children}
    </button>
    </>;
}

export default CancelButton;