import React, { useState } from "react";
import Layout from "../layout";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    file: null,
  });

  const [emailValid, setEmailValid] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "phone") {
      // Only allow numeric input and limit to 10 digits
      const filteredValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({
        ...formData,
        [name]: filteredValue,
      });
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(email));
  };

  //   const validatePhone = (phone) => {
  //     setPhoneValid(phone.length === 10);
  //   };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      validateEmail(value);
    }
  };

  const reset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      file: null,
    });
    document.getElementById("file").value = null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
    reset();
  };

  return (
    <Layout title="Form">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-header">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {!emailValid && (
              <span className="error-message">Please enter proper Email.</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload File:</label>
            <input type="file" id="file" name="file" onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="output">
            <h2>Submitted Data:</h2>
            <p>
              <strong>Name:</strong> {submittedData.firstName}{" "}
              {submittedData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Phone:</strong> {submittedData.phone}
            </p>
            {submittedData.file && (
              <>
                <p>
                  <strong>Uploaded File:</strong> {submittedData.file.name}
                </p>
                {submittedData.file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(submittedData.file)}
                    alt="Uploaded Preview"
                    className="uploaded-image"
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Form;
