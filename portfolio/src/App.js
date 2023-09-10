import "./App.css";
import Profile from "./components/profile-section/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-section/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Profile />
        </div>
        <div className="mainContainer">
          <Header />
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
