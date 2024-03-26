import {createSignal} from "solid-js";

const LoopingLists = () => {

    const [brands, setBrands] = createSignal([
        "Samsung",
        "Apple",
        "Google",
        "Xiaomi"
    ])

    const [scores, setScores] = createSignal([
        {name: "Ron Weisley", total: 70},
        {name: "Harry Porter", total: 85},
        {name: "Cho Chang", total: 80},
        {name: "Hermione Granger", total: 98}
    ]);

    return <>

        {/* <ul class="list-group">
            <For each={scores()}>
                {
                    (score, i) => {
                        return <li class="list-group-item d-flex justify-content-between align-items-center">
                            {score.name}
                            
                            <span class="badge bg-primary rounded-pill">{score.total}</span>
                        </li>
                    }
                }
            </For>
        </ul> */}
        {<ul class="list-group">
            <Index each={brands()}>
                {
                    (brand, i) => {
                        return <li class="list-group-item">{i}. {brand()}</li>
                    }
                }

            </Index>
        </ul>}



    </>
}

export default LoopingLists;