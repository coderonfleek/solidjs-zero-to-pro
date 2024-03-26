import {createStore} from "solid-js/store";

export default  createStore({
    cars: [
        {"name": "CyberTruck", "manufacturer": "Tesla", "electric": true},
        {"name": "Model S", "manufacturer": "Tesla", "electric": true},
        {"name": "F-150", "manufacturer": "Ford", "electric": false},
        {"name": "Mustang Mach-E", "manufacturer": "Ford", "electric": true},
        {"name": "Camaro", "manufacturer": "Chevrolet", "electric": false}
    ],
    count: 0,
    user: {
        username : "Fikky",
        level: "Beginner",
        profile: {
            name: "John Doe",
            age: 50
        }
    }
})