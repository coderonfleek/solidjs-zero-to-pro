import {createSignal} from "solid-js"

function Alerts() {

    const [alertType, setAlertType] = createSignal("hey");

    return <>
        <Switch fallback={
            <div class="alert alert-secondary" role="alert">
                Default Alert
            </div>
        }>
            <Match when={alertType() == "primary"}>
                <div class="alert alert-primary" role="alert">
                    Primary Alert
                </div>
            </Match>
            <Match when={alertType() == "warning"}>
                <div class="alert alert-warning" role="alert">
                    Warning Alert
                </div>
            </Match>
            <Match when={alertType() == "danger"}>
                <div class="alert alert-danger" role="alert">
                    Danger Alert
                </div>
            </Match>
        </Switch>
    </>
    
}

export default Alerts;