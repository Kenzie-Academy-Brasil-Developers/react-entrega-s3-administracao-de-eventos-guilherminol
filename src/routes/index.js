import { Switch, Route } from "react-router";
import Casamento from "../pages/Casamento";
import Formatura from "../pages/Formatura";
import Confraternizacao from "../pages/Confraternizacao";
import Home from "../pages/Home";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/casamento">
        <Casamento />
      </Route>

      <Route path="/formatura">
        <Formatura />
      </Route>

      <Route path="/confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};
export default Routes;
