import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../../ProtectedRoute";
import Layout from "./Layout";
import BlogSettings from "../Blog/BlogSettings";
import GuideSetting from "../Guide/GuideSetting";
import DemoEnquiry from "../Enquiry/DemoEnquiry";
import SalesEnquiry from "../Enquiry/SalesEnquiry";

const AdminRoutes = ({ sidebarShow, setSidebarShow }) => {
  return (
    <Routes>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
          <Layout sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
          </ProtectedRoute>
        }
      >
        <Route path="blogSetting" element={<BlogSettings />} />
        <Route path="guideSetting" element={<GuideSetting />} />
        <Route path="demo-enquiry" element={<DemoEnquiry />} />
        <Route path="sales-enquiry" element={<SalesEnquiry />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
