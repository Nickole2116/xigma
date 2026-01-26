import mod from './__index__.module.scss';

export const MoreButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick} className={`${mod.MoreButton}`}>
      {children}
    </button>
    </>;
}

export default MoreButton;