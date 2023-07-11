import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Blogs from "../Blogs/Blogs";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
  });
  return (
    <div className="w-full">
      <Navbar />
      <Blogs />
    </div>
  );
}

export default Homepage;
