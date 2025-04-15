"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ServiceBanner from "../Service/ServiceBanner";

const Contact = () => {
  // State to store form data
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

  // Handle input changes
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
    <Box className="home-page">
      <ServiceBanner title=" Contact" subtitle=" One Call Does It All!" />

      <Container maxWidth="lg" className="comp-space">
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    type="email"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Country Code"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneno"
                    value={formData.phoneno}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                  <button
                    type="submit"
                    className="custom-button rounded"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
                {responseMessage && (
                  <Typography color="success.main" sx={{ mt: 2 }}>
                    {responseMessage}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Address Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our Location
                </Typography>
                <Typography className="py-1">
                  7106 Marble Springs Dr Katy, Tx 77494
                </Typography>
                <Typography className="py-1">Phone: +1- 832-312-5501</Typography>
                <Typography className="py-1">
                  Email: support@a2zhome-solutions.com
                </Typography>
                <Typography variant="h6" className="mt-3">
                  Office Hours
                </Typography>
                <Typography className="py-1">
                  Mon – Thur: 9am – 5pm
                  <br />
                  Fri: 9am – 3pm
                  <br />
                  Sat: By Appointment Only
                  <br />
                  Sun: Closed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
