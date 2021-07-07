import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Works from "../pages/Works";
import WorksDescription from "../pages/WorksDescription";
import NotFound from "../pages/NotFound";

const Routes = () => {

  return (
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/works/description">
          <WorksDescription />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

  );
};

export default Routes;
