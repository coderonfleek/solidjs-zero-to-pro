import {lazy} from "solid-js";


import App from './App';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import UsersLayout from './layouts/UsersLayout';

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));

export default  [
    {
      path: "/",
      component: App
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/login",
      component: lazy(() => import("./pages/Login"))
    },
    {
      path: "/storedemo",
      component: lazy(() => import("./pages/StoreDemo"))
    },
    {
      path: "asyncdemo",
      component: lazy(() => import("./pages/AsyncDemo"))
    },
    {
      path: "/users",
      children : [
        {
          path: "/",
          component: Users
        },
        {
          path: "/:userId",
          component: UserProfile
        }
      ]
    }
  ]