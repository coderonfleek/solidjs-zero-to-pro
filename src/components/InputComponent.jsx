
const InputComponent = (props) => {

    return <>
        <input type="text" ref={props.forwardedRef} />
    </>
}

export default InputComponent;