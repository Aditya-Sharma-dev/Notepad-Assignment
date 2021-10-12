import "./App.css";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Labels from "./Components/Labels";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="app_header">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="app_body">
              <Sidebar num={1} />
              <Body />
              <Labels />
            </div>
          </Route>
          <Route exact path="/2">
            <div className="app_body">
              <Sidebar num={2} />
              <Body />
              <Labels />
            </div>
          </Route>
          <Route exact path="/3">
            <div className="app_body">
              <Sidebar num={3} />
              <Body />
              <Labels />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
