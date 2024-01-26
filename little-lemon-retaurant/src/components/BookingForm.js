import React from "react";
import "../styles/ReservationsPage.css";

import * as yup from "yup";
import { useFormik } from "formik";

const reservationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  telephone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Telephone number is required"),
  guests: yup
    .number()
    .min(1, "At least one guest is required")
    .max(10, "Maximum table size for reservation is 10")
    .required("Number of guests is required"),
  date: yup
    .date()
    .min(new Date(), "Date must be in the future")
    .required("Date is required"),
  time: yup.string().required("Time is Required"),
});

function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      guests: "",
      date: "",
      time: "",
      occasion: "select",
    },
    validationSchema: reservationSchema,
    onSubmit: (values, actions) => {
      onSubmit(values);
      actions.setSubmitting(false);
    },
  });

  const handleDateChange = (e) => {
    formik.handleChange(e);
    onDateChange(e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      {/* Name Field */}
      <div className="field">
        <label htmlFor="name">Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Jane Smith"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          className={formik.touched.name && formik.errors.name ? "error" : ""}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
      </div>
      {/* Email Field */}
      <div className="field">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          name="email"
          placeholder="Jane@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className={formik.touched.email && formik.errors.email ? "error" : ""}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
      </div>
      {/* Telephone Field */}
      <div className="field">
        <label htmlFor="telephone">Telephone</label>

        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          onChange={formik.handleChange}
          value={formik.values.telephone}
          onBlur={formik.handleBlur}
          className={
            formik.touched.telephone && formik.errors.telephone ? "error" : ""
          }
        />
        {formik.touched.telephone && formik.errors.telephone && (
          <div className="error-message">{formik.errors.telephone}</div>
        )}
      </div>
      {/* Occasion Field */}
      <div className="field occasion">
        <label htmlFor="occasion">Occasion (optional)</label>
        <div className="options">
          <select
            name="occasion"
            onChange={formik.handleChange}
            value={formik.values.occasion}
            onBlur={formik.handleBlur}
          >
            <option value="select">Select occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
      </div>
      {/* Number of Guests Field */}
      <div className="field guest">
        <label htmlFor="guests">Guests</label>
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          onChange={formik.handleChange}
          value={formik.values.guests}
          onBlur={formik.handleBlur}
          className={
            formik.touched.guests && formik.errors.guests ? "error" : ""
          }
        />
        {formik.touched.guests && formik.errors.guests && (
          <div className="error-message">{formik.errors.guests}</div>
        )}
      </div>
      {/* Date Field */}
      <div className="field">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          onChange={handleDateChange}
          value={formik.values.date}
          onBlur={formik.handleBlur}
          className={formik.touched.date && formik.errors.date ? "error" : ""}
        />
        {formik.touched.date && formik.errors.date && (
          <div className="error-message">{formik.errors.date}</div>
        )}
      </div>
      {/* Time Field */}
      <div className="field">
        <label htmlFor="time">Time</label>
        <select
          name="time"
          onChange={formik.handleChange}
          value={formik.values.time}
          onBlur={formik.handleBlur}
          className={formik.touched.time && formik.errors.time ? "error" : ""}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && (
          <div className="error-message">{formik.errors.time}</div>
        )}
      </div>

      {/* Submit Button */}
      <button className="reserve-btn" type="submit">
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;
