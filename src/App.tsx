import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";
import AboutMe from "./pages/aboutMe";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<AboutMe/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
