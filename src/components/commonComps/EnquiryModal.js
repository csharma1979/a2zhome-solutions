import React, { useState } from "react";
import axios from "axios";

const EnquiryModal = ({ show, handleClose }) => {
  if (!show) return null; // Prevents rendering when not needed
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    countryCode: "",
    message: "",
    formType: "contact",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setResponseMessage(response.data.message || "Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phoneno: "",
        countryCode: "",
        message: "",
        formType: "contact",
      });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.error || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Bootstrap Modal */}
      <div className="modal fade show d-block" tabIndex="-1" 
      
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Get a Free Quote</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex flex-row gap-2">
                  <div>
                 
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                  
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                 
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className=" d-flex flex-row gap-2 mb-3">
                 
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+1"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    style={{maxWidth:"70px"}}
                  />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter mobile number"
                    name="phoneno"
                    value={formData.phoneno}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
               
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="modal-footetr">
                  
                  <button  type="submit" disabled={loading} className="btn btn-primary">
                    {" "}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default EnquiryModal;
