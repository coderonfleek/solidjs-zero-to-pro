import {Switch, createSignal} from "solid-js";

const Progress = () => {

    const [showProgress, setShowProgress] = createSignal(true);

    const toggle = () => setShowProgress(!showProgress());
    

    return (
        <>

            <Switch fallback={
                <button onClick={toggle} class="btn btn-primary">Show Progress</button>
            }>
                <Match when={showProgress()}>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
                    </div>

                    <button onClick={toggle} class="btn btn-warning mt-2">Hide Progress</button>
                </Match>
                
            </Switch>

            {/* <Show when={showProgress()} 
                  fallback={
                    <button onClick={toggle} class="btn btn-primary">Show Progress</button>
                  }>
                    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
                    </div>

                    <button onClick={toggle} class="btn btn-warning mt-2">Hide Progress</button>
            </Show> */}
        </>
    )
}

export default Progress;