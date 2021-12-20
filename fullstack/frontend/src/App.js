import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth } from "./auth";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  const { auth, logout } = useAuth();
  return (
    <Router>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        {!auth.isLoggedIn ? (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <div>{auth.email}</div>
            <Link className="nav-link" to="/login" onClick={logout}>
              Logout
            </Link>
          </>
        )}
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
