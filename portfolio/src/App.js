import "./App.css";
import Profile from "./components/profile-section/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-section/Header";
import About from "./components/main-section/About/About";
import Education from "./components/main-section/Education/Education";
import Experience from "./components/main-section/Education";
import Projects from "./components/main-section/Projects";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Profile />
        </div>
        <div className="mainContainer">
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
