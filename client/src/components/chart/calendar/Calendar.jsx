import React, { useState } from "react";
import "./calendar.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarChart() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h3>Event Calendar</h3>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
