import Login from "../components/Auth/Login";
import Detail from "../components/Detail";
import Home from "../components/Home";

const APP_ROUTES = [
  {
    path: "/",
    component: Home,
    isProtected: true,
  },
  {
    path: "/product/:id",
    component: Detail,
    isProtected: true,
  },
  {
    path: "/login",
    component: Login,
    isProtected: false,
  }
];

export default APP_ROUTES;
