

import store from "../stores/appStore";
import {produce} from "solid-js/store"

const [appStore, setAppStore] = store;


const StoreDemo = () => {

    const addCar = () => {
        setAppStore("cars", (cars) => [...cars, {
            name: "i3",
            manufacturer: "BMW",
            electric: true
        }])
    }

    const updateCyberTruck = () => {

        setAppStore("cars", (cars) => cars.map((car) => {
            return car.name == "CyberTruck"? {...car, name: "Tesla CyberTruck"}: car;
        }))
    }

    const updateCamaro = () => {
        setAppStore(
            "cars",
            (car) => car.name == "Camaro",
            "name",
            "Camaro T"
        )
    }

    const toggleFordElectric = () => {
        setAppStore(
            "cars",
            (car) => car.name == "F-150",
            "electric",
            (electric) => !electric
        )
    }

    const deleteModelS = () => {
        setAppStore("cars", (cars) => cars.filter((car) => car.name != "Model S"));
    }

    return <>
        <h2>Store Demos</h2>

        {/* <h3>{appStore.count}</h3>
        
        <button onClick={() => setAppStore("count", 10)}>Set 10</button>
        <br />
        <br />
        
        <button onClick={() => setAppStore({count : 15})}>Set 15</button>
        <br />
        <br />
        
        <button onClick={() => setAppStore("count", (c) => c + 1 )}>Increment by 1</button> */}

        {/* <h3>Username: {appStore.user.username} | Level: {appStore.user.level}</h3>

        <button onClick={() => setAppStore("user", {
            username : "CoderOnFleek",
            level: "Intermediate"
        })}>Update User</button>

        <h3>Age: {appStore.user.profile.age}</h3>

        <button onClick={() => setAppStore("user", "profile", "age", 66)}>Update Age</button> */}

        {/* <h3>Cars</h3>

        <For each={appStore.cars}>
            {
                (car, i) => {
                    return <li>{car.name} - {car.manufacturer} ({car.electric? "Electric" : "Fuel"})</li>
                }
            }
        </For>

        <button onClick={addCar}>Add Car</button>
        <br />
        <br />
        <button onClick={updateCyberTruck}>Update CyberTruck</button>
        <br />
        <br />
        <button onClick={updateCamaro}>Update Camaro</button>
        <br />
        <br />
        <button onClick={toggleFordElectric}>Toggle Ford Electric</button>
        <br />
        <br />
        <button onClick={deleteModelS}>Delete Model S</button> */}

        <h3>Count: {appStore.count}</h3>
        <h3>Username: {appStore.user.username} | Level: {appStore.user.level}</h3>

        <For each={appStore.cars}>
            {
                (car, i) => {
                    return <li>{car.name} - {car.manufacturer} ({car.electric? "Electric" : "Fuel"})</li>
                }
            }
        </For>
            <br />
            <br />
        <button onClick={() => setAppStore(
            produce((state) => {
                state.count = 100;
                state.user.username = "NiceGuy";
                state.cars.push({
                    name: "i3",
                    manufacturer: "BMW",
                    electric: true
                })
            })
        )}>Update with produce</button>

    </>
}

export default StoreDemo;