import InputComponent from "./InputComponent";
import {onMount} from "solid-js";

const ForwardingRefs = () => {

    let inputRef;

    onMount(() => {
        inputRef.focus();
    })

    return <>

        <InputComponent forwardedRef={(ref) => inputRef = ref} />
        <br />
        <button onClick={() => {
            inputRef.focus();
        }} class="btn btn-primary">Submit</button>
    </>
}

export default ForwardingRefs;