
export const ModalButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick}>
      {children}
    </button>
    </>;
}

export default ModalButton;