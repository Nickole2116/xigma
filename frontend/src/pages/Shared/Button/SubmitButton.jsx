
export const SubmitButton = ({ children, onClick }) => {


    return <>
    <button onClick={onClick}>
      {children}
    </button>
    </>;
}

export default SubmitButton;