import About from "./components/about";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Works from "./components/works";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
