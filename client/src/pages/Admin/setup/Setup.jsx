import React, { useState } from "react";
import "./setup.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { FaEdit } from "react-icons/fa";

const EditModal = ({ closeEditModal }) => {
  return (
    <div className="edit-model">
      <div className="edit-model-container">
        <button className="edit-btn" onClick={closeEditModal}>
          X
        </button>
      </div>
      <form className="edit-form">
        <div className="edit-form-content">
          <label className="edit-content-title">Organization Name</label>
          <input className="edit-content-input" type="text" />
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Principal Name</label>
          <input className="edit-content-input" type="text" />
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Address</label>
          <input className="edit-content-input" type="text" />
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Organization Stamp</label>
          <input className="edit-content-input edit-file" type="file" />
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Organization Logo</label>
          <input className="edit-content-input edit-file" type="file" />
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Principal Signature</label>
          <input className="edit-content-input edit-file" type="file" />
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Contact</label>
          <input className="edit-content-input" type="number" />
          <input className="edit-content-input" type="number" />
        </div>
      </form>
      <div className="form-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

const Setup = () => {
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);

  const handleEdit = () => {
    setIsSetupModalOpen(true);
  };
  return (
    <>
      <Sidebar />
      <Navbar />
      <h1 className="organization-title">Organization Setup</h1>
      <div className="setup-container">
        <div className="setup-section">
          <div className="setup-section-content">
            <div className="setup-section-content-container">
              <span className="content-title">Organization Name</span>
              <span className="content-desc">Himalaya Darshan College</span>
            </div>
            <div className="setup-section-content-container">
              <span className="content-title">Principal Name</span>
              <span className="content-desc">Bharat Sapkota</span>
            </div>
            <div className="setup-section-content-container">
              <span className="content-title">Contact</span>
              <span className="content-desc">98000000</span>
              <span className="content-desc">9812345678</span>
            </div>
            <div className="setup-section-content-container">
              <span className="content-title">Address</span>
              <span className="content-desc">Biratnagar</span>
            </div>
            <div className="setup-section-content-container">
              <span className="content-title">Organization Logo</span>
              <span className="content-desc">img1.jpg</span>
            </div>
            <div className="setup-section-content-container">
              <span className="content-title">Organization Stamp</span>
              <span className="content-desc">img2.jpg</span>
            </div>
            <div className="setup-section-content-container">
              <span className="content-title">Principal SIgnature</span>
              <span className="content-desc">img3.jpg</span>
            </div>
          </div>
          <button className="organization-edit-btn" onClick={handleEdit}>
            <div className="edit-icon">
              <FaEdit />
            </div>
            Edit
          </button>
        </div>
      </div>
      {isSetupModalOpen && (
        <>
          <div className="overlay" onClick={() => setIsSetupModalOpen(false)} />
          <EditModal closeEditModal={() => setIsSetupModalOpen(false)} />
        </>
      )}
    </>
  );
};

export default Setup;
