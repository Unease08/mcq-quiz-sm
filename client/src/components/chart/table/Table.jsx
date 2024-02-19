import React from "react";
import "./Table.scss";

const data = [
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
  {
    name: "Anom",
    class: 11,
    section: "A",
    subject: "Chemistry",
    date: "2080-10-25",
  },
];

const Table = () => {
  return (
    <div className="Table">
      <h1>Upcoming Exams</h1>
      <table>
        <tr>
          <th>Teacher </th>
          <th>Class</th>
          <th>Section</th>
          <th>Subject</th>
          <th>Date</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.class}</td>
              <td>{val.section}</td>
              <td>{val.subject}</td>
              <td>{val.date}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
