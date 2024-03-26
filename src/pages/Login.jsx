import {createSignal, createEffect} from "solid-js";
import {useNavigate} from "@solidjs/router";

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = createSignal(false);
    const navigate = useNavigate();

    const handleLogin = () => {

        //Perform login logic

        setIsLoggedIn(true);
        
    }

    createEffect(() => {

        if(isLoggedIn()){
            //Navigate to the home page
            navigate("/");
        }
    })

    return <>
        <div class="container mt-3">
            <h1>Login Page</h1>

            <div>
                <button onClick={handleLogin}> Sign In </button>
            </div>
        </div>
    </>

}

export default Login;