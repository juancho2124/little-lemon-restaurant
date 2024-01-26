import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders the Full Name label in BookingForm", () => {
  const mockAvailableTimes = [];
  const mockOnDateChange = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      onDateChange={mockOnDateChange}
    />
  );
  const labelElement = screen.getByText(/Full Name/i);
  expect(labelElement).toBeInTheDocument();
});
