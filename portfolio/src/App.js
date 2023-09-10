import "./App.css";
import Profile from "./components/profile-section/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-section/Header";
import About from "./components/main-section/About";
import Resume from "./components/main-section/Resume";
import Experiance from "./components/main-section/Experiance";
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
          <About />
          <Resume />
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
