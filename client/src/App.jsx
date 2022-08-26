import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Route,
  Router,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <BrowserRouter>
        <Route exact path="/">
          {user ? <Home /> : <Navigate to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Navigate to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Navigate to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </BrowserRouter>
    </Router>
  );
};

export default App;
