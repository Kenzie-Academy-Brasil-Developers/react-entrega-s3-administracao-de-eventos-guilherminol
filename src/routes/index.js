import { Switch, Route } from "react-router";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/casamento">
        <Casamento />
      </Route>

      <Route Path="/cormatura">
        <Formatura />
      </Route>

      <Route path="confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};
export default Routes;
