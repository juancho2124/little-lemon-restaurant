import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import ConfirmedBooking from "./components/ConfirmedBooking";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
