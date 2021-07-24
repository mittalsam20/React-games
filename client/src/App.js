import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Username from "./pages/home/home";
import Allgames from "./pages/allgames/allgames";
import Molestart from "./pages/molestart/molestart";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Username} exact></Route>
            <Route path="/allgames" component={Allgames} exact></Route>
            <Route path="/whack-a-mole" component={Molestart} exact></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
