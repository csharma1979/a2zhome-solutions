"use client";
import '@/styles/CMSStyles/CmsBlog.css';

import React, { useState, useEffect } from "react";
import EnquiryMenu from "./EnquiryMenu";
import axios from "axios";
import { CONTACT_API_ROUTES } from "../../../lib/services/APIURL/Api";


const ServiceEnquiry = () => {
  const [demoData, setDemoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDemoData = async () => {
      const url = `${CONTACT_API_ROUTES.CONTACT_ROUTE}`;
    try {
      const demoFormsData = await axios.get(url);

      const response = demoFormsData.data;
      const demoResponse = response.filter((demo) => demo.companyName !== "");
      
      setDemoData(demoResponse);
    } catch (error) {
      console.error("Error fetching demo forms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDemoData();
  }, []);

  return (
    <div className="component-bg-color p-4">
      <div className="d-sm-flex d-flex flex-row heading-container">
        <h1 className="widget-title my-3">Demo Enquiries Management</h1>
      </div>
      <EnquiryMenu />

      <div className="table-container">
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Country Code</th>
              <th>Phone No</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-capitalize">
            {demoData.length > 0 ? (
              demoData.map((form, index) => (
                <tr key={form._id}>
                  <td>{index + 1}</td>
                  <td>{`${form.firstname} ${form.lastname}` || "No Name"}</td>
                  <td>{form.email || "No Email"}</td>
                  <td>{form.companyName || "No Company"}</td>
                  <td>{form.countryCode || "No Country Code"}</td>
                  <td>{form.phoneNo || "No Phone No"}</td>
                  <td>{form.message}</td>
                  <td>{new Date(form.createdAt).toLocaleDateString() || "NO Date"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No demo enquiries available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceEnquiry;
