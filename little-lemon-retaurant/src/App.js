import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
