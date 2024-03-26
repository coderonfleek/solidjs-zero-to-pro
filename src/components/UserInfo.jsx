import api from "../api";
import {createResource} from "solid-js";

const UserInfo = () => {

    const [user] = createResource(() => api.fetchUser(2));

    return <>
        <h3>User Info</h3>
        <div>
            <b>Name:</b> {user()?.name}
            <br />
            <b>Email:</b> {user()?.email}
        </div>
    </>
}

export default UserInfo;