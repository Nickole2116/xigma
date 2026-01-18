export const ThirdButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick}>
      {children}
    </button>
    </>;
}

export default ThirdButton;