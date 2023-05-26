import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import { useDispatch} from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "redux/auth/auth.operation";
import  {PrivateRoute} from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import {useAuth} from "./hooks/useAuth";
import NotFound from "../pages/NotFound"

const Home= lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));



const App = ()  => {
  const dispatch = useDispatch();
  const {isRefreshing}  = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/register" 
            element={<RestrictedRoute 
            redirectTo="/contacts" 
            component={<Register />}
            />}
      />
      <Route path="/login" 
            element={<RestrictedRoute
            redirectTo="/contacts" 
            component={<Login />}
            />}
      />
      <Route path="/contacts" 
            element={ <PrivateRoute 
            redirectTo="/login"
            component={<Contacts />}
            />}
      />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}
export default App;