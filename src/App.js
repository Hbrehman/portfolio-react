import "./App.css";
import Navbar from "./components/common/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Stack from "./components/stack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/stack" component={Stack} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
