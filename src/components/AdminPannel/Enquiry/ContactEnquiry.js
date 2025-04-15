"use client";

import React, { useState, useEffect } from "react";
import EnquiryMenu from "./EnquiryMenu";
import axios from "axios";
import { CONTACT_API_ROUTES } from "../../../lib/services/APIURL/Api";


const ContactEnquiry = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSalesData = async () => {
    const url = `${CONTACT_API_ROUTES.CONTACT_ROUTE}`;
    try {
      const contactFormsData = await axios.get(url);

      const response = contactFormsData.data;

      setContactData(response, "sales");
    } catch (error) {
      console.error("Error fetching demo forms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSalesData();
  }, []);
  return (
    <div className="component-bg-color p-4">
      <div className="d-sm-flex d-flex flex-row heading-container">
        <h1 className="widget-title my-3">Contact Enquiries Management</h1>
      </div>
      <EnquiryMenu />

      <div className="table-container">
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country Code</th>
              <th>Phone No</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-capitalize">
            {contactData.length > 0 ? (
              contactData.map((form, index) => (
                <tr key={form._id}>
                  <td>{index + 1}</td>
                  <td>{`${form.firstname} ${form.lastname}` || "No Name"}</td>
                  <td>{form.email || "No Email"}</td>

                  <td>{form.countryCode || "No Country Code"}</td>
                  <td>{form.phoneNo || "No Phone No"}</td>
                  <td>{form.message}</td>
                  <td>
                    {new Date(form.createdAt).toLocaleDateString() || "NO Date"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Contact enquiries available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactEnquiry;
