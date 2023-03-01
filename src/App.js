import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Signin from "./Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
