import React, { useState } from "react";
import "./setup.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { FaEdit } from "react-icons/fa";

const EditModal = ({ closeEditModal }) => {
  const [formData, setFormData] = useState({
    organizationName: "",
    principalName: "",
    address: "",
    organizationStamp: "",
    organizationLogo: "",
    principalSignature: "",
    contact1: "",
    contact2: "",
  });

  const [errors, setErrors] = useState({
    organizationName: "",
    principalName: "",
    address: "",
    organizationStamp: "",
    organizationLogo: "",
    principalSignature: "",
    contact1: "",
    contact2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); //Clear error when user start typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let hasErrors = false;

    //check if any filed is empty
    for (const key in formData) {
      if (formData[key] === "") {
        newErrors[key] = "This field is required";
        hasErrors = true;
      }
    }

    //validate contact fields
    const contactRegex = /^\d+$/;
    if (formData.contact1 !== "" && !contactRegex.test(formData.contact1)) {
      newErrors["contact1"] = "Please enter a valid contact number";
      hasErrors = true;
    }

    if (formData.contact2 !== "" && !contactRegex.test(formData.contact2)) {
      newErrors["contact2"] = "Please enter a valid contact number";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      //if all the field are validated, log the data
      console.log(formData);
    }
  };

  return (
    <div className="edit-model">
      <div className="edit-model-container">
        <button className="edit-btn" onClick={closeEditModal}>
          X
        </button>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="edit-form-content">
          <label className="edit-content-title">Organization Name</label>
          <input
            className="edit-content-input"
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
          {errors.organizationName && (
            <span className="error">{errors.organizationName}</span>
          )}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Principal Name</label>
          <input
            className="edit-content-input"
            type="text"
            name="principalName"
            value={formData.principalName}
            onChange={handleChange}
          />
          {errors.principalName && (
            <span className="error">{errors.principalName}</span>
          )}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Address</label>
          <input
            className="edit-content-input"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Organization Stamp</label>
          <input
            className="edit-content-input edit-file"
            type="file"
            name="organizationStamp"
            onChange={handleChange}
          />
          {errors.organizationStamp && (
            <span className="error">{errors.organizationStamp}</span>
          )}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Organization Logo</label>
          <input
            className="edit-content-input edit-file"
            type="file"
            name="organizationLogo"
            onChange={handleChange}
          />
          {errors.organizationLogo && (
            <span className="error">{errors.organizationLogo}</span>
          )}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Principal Signature</label>
          <input
            className="edit-content-input edit-file"
            type="file"
            name="principalSignature"
            onChange={handleChange}
          />
          {errors.principalSignature && (
            <span className="error">{errors.principalSignature}</span>
          )}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Contact 1</label>
          <input
            className="edit-content-input"
            type="text"
            name="contact1"
            value={formData.contact1}
            onChange={handleChange}
            pattern="[0-9]+"
            title="Please enter a valid phone number."
          />
          {errors.contact1 && <span className="error">{errors.contact1}</span>}
        </div>
        <div className="edit-form-content">
          <label className="edit-content-title">Contact 2</label>
          <input
            className="edit-content-input"
            type="text"
            name="contact2"
            value={formData.contact2}
            onChange={handleChange}
            pattern="[0-9]+"
            title="Please enter a valid phone number"
          />
          {errors.contact2 && <span className="error">{errors.contact2}</span>}
        </div>
        <div className="form-btn">
          <button className="cancel-btn" onClick={closeEditModal}>
            Cancel
          </button>
          <button className="save-btn" type="submit">
            Save Changes
          </button>
        </div>
      </form>
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
