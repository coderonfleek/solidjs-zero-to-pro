import {createSignal, createEffect} from "solid-js"

const Counter = () => {

    const [count, setCount] = createSignal(0);
    const [disableDecrement, setDisableDecrement] = createSignal(true);

    createEffect(() => {
        //console.log(count());
        if(count() == 0){
            setDisableDecrement(true)
        }else{
            setDisableDecrement(false)
        }
    })

    return(

        <div class="row">
            <div class="col">
                <button disabled={disableDecrement()} onClick={() => setCount(count() - 1)} class="btn btn-danger">Decrement</button>
            </div>
            <div class="col">
                <p align="center">
                    <span class="fs-1">{count()}</span>
                </p>
                
            </div>
            <div class="col">
                <button onClick={() => setCount(count() + 1)} class="btn btn-success">Increment</button>
            </div>
        </div>
    )
}

export default Counter;