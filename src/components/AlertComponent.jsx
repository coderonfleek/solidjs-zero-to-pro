import {createSignal} from "solid-js";


const AlertComponent = (props) => {

    const [alertType, setAlertType] = createSignal("primary")

  
    return (
      <>
        <div class={`alert alert-${alertType()}`} role="alert">
          {props.children}
        </div>
        <button class="btn btn-warning" onClick={() => setAlertType("danger")}>Change Background</button>
      </>
    )
}

export default AlertComponent;