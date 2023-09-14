import "./App.css";
import Profile from "./components/profile-section/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-section/Header";
import About from "./components/main-section/About/About";
import Experiance from "./components/main-section/Education";
import Projects from "./components/main-section/Projects";
import Education from "./components/main-section/Education/Education";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Profile />
        </div>
        <div className="mainContainer">
          <Header />
          <About />
          <Education />
          <Experiance />
          <Projects />
          {/* <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/dashboard" element={<Dashboard />} />{" "}
          </Routes> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
