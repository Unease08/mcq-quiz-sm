import React, { useState } from "react";
import "./class.css";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const AddClassModal = ({ closeAddClassModal }) => {
  return (
    <div className="add-class-model">
      <div className="close-model-btn">
        <button className="close-btn" onClick={closeAddClassModal}>
          x
        </button>
      </div>
      <div className="addClass-input">
        <input
          className="addClass-input-field"
          type="text"
          placeholder="Enter class name"
        />
        <select required className="addClass-input-field">
          <option className="placeholder" selected disabled value="">
            Enter faculty
          </option>
          <option value="science">Science</option>
          <option value="management">Management</option>
        </select>
      </div>

      {/* This is taken from setup.jsx */}
      <div className="form-btn">
        <button className="cancel-btn" onClick={closeAddClassModal}>
          Cancel
        </button>
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

const Class = () => {
  const [isAddClassModelOpen, setIsAddClassModelOpen] = useState(false);

  const handleAddClass = () => {
    setIsAddClassModelOpen(true);
  };
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="class-container">
        <div className="addClass-btn">
          <button className="add-btn" onClick={handleAddClass}>
            Add class
          </button>
        </div>
        <div className="class-table-container">
          <table className="class-table">
            <thead>
              <tr>
                <th>Class ID</th>
                <th>Created By</th>
                <th>Class Name</th>
                <th>Faculty</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Admin@gmail.com</td>
                <td>11</td>
                <td>Science</td>
                <td>
                  <button className="active-btn">Active</button>
                </td>
                <td>
                  <div className="action-icons">
                    <FaRegEdit />
                    <MdOutlineDelete />
                  </div>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {isAddClassModelOpen && (
        <>
          <div
            className="overlay"
            onClick={() => setIsAddClassModelOpen(false)}
          />
          <AddClassModal
            closeAddClassModal={() => setIsAddClassModelOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Class;
