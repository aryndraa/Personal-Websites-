import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Portofolio from "./pages/Porrtofolio";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/my-skill" Component={Skill} />
        <Route path="/my-portofolio" Component={Portofolio} />
      </Routes>
    </div>
  );
}

export default App;
