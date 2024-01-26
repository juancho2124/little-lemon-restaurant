import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
