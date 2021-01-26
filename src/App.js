import "./App.css";
import Navbar from "./components/common/navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
