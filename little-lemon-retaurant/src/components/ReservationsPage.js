import React, { useState, useEffect, useCallback } from "react";
import "../styles/ReservationsPage.css";
import BookingForm from "./BookingForm";

const ReservationsPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const getTimeSlotsForDay = useCallback((dayOfWeek) => {
    if (dayOfWeek === 6) {
      // Sunday
      return generateTimeSlots("12:00", "21:00");
    } else if (dayOfWeek >= 0 && dayOfWeek <= 3) {
      // Monday to Thursday
      return generateTimeSlots("11:00", "22:00");
    } else {
      // Friday and Saturday
      return generateTimeSlots("11:00", "23:00");
    }
  }, []);

  const generateTimeSlots = (start, end) => {
    let slots = [];
    let currentHour = parseInt(start.split(":")[0]);
    let endHour = parseInt(end.split(":")[0]);

    while (currentHour <= endHour) {
      slots.push(`${currentHour.toString().padStart(2, "0")}:00`);
      currentHour++;
    }
    return slots;
  };

  useEffect(() => {
    if (selectedDate) {
      const dayOfWeek = new Date(selectedDate).getDay();
      setAvailableTimes(getTimeSlotsForDay(dayOfWeek));
    }
  }, [selectedDate, getTimeSlotsForDay]);

  return (
    <div className="reservation-container">
      <div className="reservation-content">
        <div className="reservation-text">
          <h2>Reserve Your Slice of Happines!</h2>
          <p>
            Welcome to our reservations page! Here at Little Lemon, we're
            dedicated to creating an exceptional dining experience just for you.
            Whether you're celebrating a special occasion or simply looking for
            a delightful meal, our reservation process is quick and easy,
            ensuring your table is ready when you are. Choose your preferred
            date, time, and any special requests - we'll take care of the rest.
            Your perfect dining experience is just a few clicks away, so let's
            get started and make some unforgettable memories together!
          </p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <BookingForm
            availableTimes={availableTimes}
            onDateChange={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
