import React, { useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { navigate } from "gatsby";

const AdminDashboard = () => {
  useEffect(() => {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      navigate("/admin/login"); // Redirect to login if not logged in
    }
  }, []);

  return <h1>Welcome to the Admin Dashboard!</h1>;
};

export default AdminDashboard;
