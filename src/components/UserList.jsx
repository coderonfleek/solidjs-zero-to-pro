import { createSignal, onMount } from "solid-js";


function UserList() {

    const [users, setUsers] = createSignal([]);

    onMount(async () => {

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }

    })

    return <>

        <div class="container mt-3">

            <h2>Users List</h2>

            <ul>
                <For each={users()}>
                    {
                        (user, i) => <li>{user.name}</li>
                    }
                </For>
            </ul>
        </div>

    </>
    
}

export default UserList;