import {A} from "@solidjs/router";

const UsersLayout = (props) => {

    return <>
        <h1>Users Section</h1>

        {props.children}

        <div>
            <A href="/">Home</A> | <A href="/users">All Users</A>
        </div>
        
    </>

}

export default UsersLayout;