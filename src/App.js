import "./App.css";
import Navbar from "./components/common/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Stack from "./components/stack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Stack />
    </div>
  );
}

export default App;
