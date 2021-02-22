import Home from "./components/Home";
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game">
            <GameDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
