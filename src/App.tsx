import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";
import AboutMe from "./pages/aboutMe/aboutMe";
import ProjectsPage from "./pages/projects/projects";
import '../src/assets/locale/lib/i18n';

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
