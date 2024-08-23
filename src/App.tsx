import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 md:px-16 w-full h-full">
      <NavBar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
