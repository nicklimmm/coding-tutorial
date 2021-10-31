import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth";

const PrivateRoute = (props) => {
  const { auth } = useAuth();
  return (
    <Route exact path={props.path}>
      {auth.isLoggedIn ? <>{props.children}</> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
