"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button } from '@mui/material';

const CmsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

     
      localStorage.setItem("adminToken", response.data.token);
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Invalid login credentials");
    }
    finally {
      setLoading(false);  
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="brand-logo">
          <Image
            src="/assets/Fritado-color-logo.webp"
            alt="a2zhome-solutions"
            className="d-flex mx-auto"
            width={150}
            height={65}
            priority
          />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className=" d-flex search-field">
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              className="login-ip"
            />
          </div>
          <div className="d-flex search-field position-relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              className="login-ip"
            />
            <span
              onClick={togglePasswordVisibility}
              className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <Button type="submit" variant="contained" size="large" sx={{ mt: 4 }}>
            {!loading ? "SIGN IN" : "PROCESSING..."}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CmsLogin;
