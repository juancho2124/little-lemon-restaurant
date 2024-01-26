import React from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        {/* Add the rest of the options */}
      </select>

      {/* Add fields for Number of Guests, Occasion, and Submit Button */}
    </form>
  );
};
export default BookingForm;
