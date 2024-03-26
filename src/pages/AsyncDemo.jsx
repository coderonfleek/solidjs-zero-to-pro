import {createSignal, createResource, Suspense} from "solid-js";
import UserInfo from "../components/UserInfo";
import UserPosts from "../components/UserPosts";
import UserListWithMutate from "../components/UserListWithMutate";

const AsyncDemo = () => {

    const [userId, setUserId] = createSignal(1);

    const [data] = createResource(userId, fetchUser);

    async function fetchUser() {
        
        const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId()}`);

        return response.json();
    }

    function fetchNewUser() {
        const random = Math.ceil(Math.random() * 10);
        console.log(random);
        setUserId(random);
    }

    return <>
        <h1>Async Demos with createResource</h1>

        {/* Fetching Data */}
        {/*<button onClick={fetchNewUser}>Fetch New User</button>
        <br />
        <br />
         <Show when={data.loading}>
            <p>Loading.....</p>
        </Show>

        <Switch>
            <Match when={data.error}>
                <p>
                    Error fetching user: {error()}
                </p>
            </Match>
            <Match when={data()}>
                <div>
                    <b>Name:</b> {data()?.name}
                    <br />
                    <b>Email:</b> {data()?.email}
                </div>
            </Match>
        </Switch> */}

        {/* Working with Suspense */}

        {/* <Suspense fallback={<p>Loading new user...</p>}>

            <Switch>
                <Match when={data.error}>
                    <p>
                        Error fetching user: {error()}
                    </p>
                </Match>
                <Match when={data()}>
                    <div>
                        <b>Name:</b> {data()?.name}
                        <br />
                        <b>Email:</b> {data()?.email}
                    </div>
                </Match>
            </Switch>
        </Suspense> */}

        {/* Nested Suspense */}
        {/* <Suspense fallback={<p>Loading Items...</p>}>
            <UserInfo />
            <UserPosts />
        </Suspense> */}

        {/* Mutate and Refresh */}
        <UserListWithMutate />
    </>
}

export default AsyncDemo;