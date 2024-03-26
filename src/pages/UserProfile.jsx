import {createSignal, onMount} from "solid-js";
import { useParams } from "@solidjs/router";

const UserProfile = () => {

    const params = useParams();
    const [user, setUser] = createSignal(null);
    const [isLoading, setIsLoading] = createSignal(true);

    onMount(async () => {
        try {
            console.log(params.userId);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);

            const userDetails = await response.json();

            setUser(userDetails);
            
        } catch (error) {
            console.error(error);
           
            
        } finally {
            setIsLoading(false);
        }
    })

    return <>
        <div>
            <h1>User Profile</h1>
            <Show when={isLoading()}>Loading.....</Show>

            <Show when={user()}>

                <h3>{user().name}</h3>
                <p><b>Email:</b> {user().email}</p>

            </Show>
        </div>
    </>

}

export default UserProfile;