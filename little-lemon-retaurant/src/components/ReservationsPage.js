import React from "react";
import "../styles/ReservationsPage.css";
import BookingForm from "./BookingForm";

const ReservationsPage = () => {
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
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
