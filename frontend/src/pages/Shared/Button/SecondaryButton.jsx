export const SecondaryButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick}>
      {children}
    </button>
    </>;
}

export default SecondaryButton;