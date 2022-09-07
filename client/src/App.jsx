import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />}></Route>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />}></Route>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
        { user && (
          <>
            <Route path="/movies" element={<Home type="movie" />}></Route>
            <Route path="/series" element={<Home type="serie"/>}></Route>
            <Route path="/watch" element={<Watch />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;