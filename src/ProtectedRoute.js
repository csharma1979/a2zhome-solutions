"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
