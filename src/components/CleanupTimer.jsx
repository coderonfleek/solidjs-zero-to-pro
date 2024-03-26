import { createEffect, createSignal, onCleanup } from "solid-js";

function CleanupTimer() {

    let intervalId = null;

    onCleanup(() => {

        console.log(`Timer cleanup crew cleared: ${intervalId}`);
        clearInterval(intervalId);
    })

    const [seconds, setSeconds] = createSignal(0);

    createEffect(() => {
        intervalId = setInterval(() => {

            setSeconds((s) => s + 1);

        }, 1000)
    })

    return <h1>Time Elapsed: {seconds()} seconds</h1>
}

export default CleanupTimer;