import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Works from "../pages/Works";
import WorksDescription from "../pages/WorksDescription";
import NotFound from "../pages/NotFound";
import NotFoundDesk from "../pages/NotFoundDesk/NotFound";
import MoreInfoProfile from "../pages/MoreInfoProfile/Index";
import WorksEdit from "../pages/WorksEdit";
import CreateWork from "../pages/CreateWork";
import DesktopHome from "../pages/DESKTOP/DesktopHome";
import ProfileSpecificUser from "../pages/ProfileSpecificUser/index";
import WorksDesktop from "../pages/DESKTOP/WorksDesktop";
import EditInfoProfile from "../pages/EditInfoProfile";
import { useViewport } from "../providers/GetViewport";
import ChoiceAvatar from "../pages/ChoiceAvatar";
import { useEffect } from "react";

const Routes = () => {
  const {
    setViewport,
    getWindowDimension,
    viewport: { width },
  } = useViewport();

  useEffect(() => {
    setViewport(getWindowDimension());
  }, []);

  return width < 1266 ? (
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
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/profileUser/:id">
        <ProfileSpecificUser />
      </Route>
      <Route path="/moreInfoProfile">
        <MoreInfoProfile />
      </Route>
      <Route path="/editInfoProfile">
        <EditInfoProfile />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/works">
        <Works />
      </Route>
      <Route path="/worksEdit/:id">
        <WorksEdit />
      </Route>
      <Route path="/works/:id">
        <WorksDescription />
      </Route>
      <Route path="/avatar">
        <ChoiceAvatar />
      </Route>
      <Route path="/createWork">
        <CreateWork />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  ) : (
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
      <Route exact path="/works">
        <DesktopHome />
      </Route>
      <Route path="/home">
        <DesktopHome />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
