/* @refresh reload */
import { render } from 'solid-js/web';
import {Router, Route, Navigate} from "@solidjs/router";
import {lazy, createSignal} from "solid-js";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes";

/* import About from "./pages/About";
import Services from "./pages/Services"; */

const [isAuthenticated, setIsAuthenticated] = createSignal(true);

const checkAuthenticated = () => {

  //Run auth check here
  return isAuthenticated();
}


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}



render(() => <Router>
              {routes}
              
            </Router>
  , root);
