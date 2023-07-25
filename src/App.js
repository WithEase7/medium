import "./App.css";
import Home from "./components/Home";
import Membership from "./components/Membership";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Write from "./components/Write";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
}

export default App;
