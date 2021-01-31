import "./App.css";
import Navbar from "./components/common/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Stack from "./components/stack";
import Contact from "./components/contact";
import Footer from "./components/common/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
