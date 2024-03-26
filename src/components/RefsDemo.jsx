

const RefsDemo = () => {

    let inputRef;

    return <>

        <input ref={(inputElement) => {
            
            inputRef = inputElement;
            inputElement.value = "Fikayo Adepoju"
         } } type="text" />
        <br />
        <button onClick={() => {
            inputRef.focus();
        }} class="btn btn-primary">Submit</button>
    </>
}

export default RefsDemo;