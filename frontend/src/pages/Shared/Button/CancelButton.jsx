import mod from './__index__.module.scss';

export const ThirdButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick} className={`${mod.ThirdButton}`}>
      {children}
    </button>
    </>;
}

export default ThirdButton;