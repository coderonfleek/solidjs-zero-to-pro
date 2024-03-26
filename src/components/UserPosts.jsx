import api from "../api";
import {Suspense, createResource} from "solid-js";

const UserPosts = () => {

    const [posts] = createResource(api.fetchPosts);

    return <>
        <h3>Posts</h3>
        <Suspense fallback={<p>Loading Posts...</p>}>
            <ul>
                <For each={posts()}>
                    {
                        (post, i) => <li>{post.title}</li>
                    }
                </For>
            </ul>
        </Suspense>
    </>
}

export default UserPosts;