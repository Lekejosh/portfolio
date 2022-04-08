import About from "./components/about";
import Contact from "./components/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
