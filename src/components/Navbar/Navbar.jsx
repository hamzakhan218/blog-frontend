import React, { useContext, useState } from "react";
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import AuthContext from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const [profileModal, setProfileModal] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="flex col-span-10 h-auto  justify-between items-center px-10">
          <img src={logo} className="h-20 w-20" alt="Logo" />
          <div className="flex font-Roboto">
            <h1
              className="px-4 hover:-translate-y-0.5 hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </h1>
            <h1
              className="px-4 hover:-translate-y-0.5 hover:cursor-pointer"
              onClick={() => navigate("/myblogs")}
            >
              My Blogs
            </h1>
            <h1
              className="px-4 hover:-translate-y-0.5 hover:cursor-pointer"
              onClick={() => navigate("/contactUs")}
            >
              Contact
            </h1>
          </div>
        </div>
        <div className="col-span-2 flex items-center  px-5">
          <div className="h-9 w-12 rounded-full  flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="h-7 w-7  rounded-full" />
          </div>
          <p className="text-xs px-1  h-full flex items-center">{user?.name}</p>
          <FontAwesomeIcon
            icon={faGear}
            className="h-5 hover:cursor-pointer"
            onClick={() => setProfileModal(!profileModal)}
          />
        </div>
      </div>
      <div
        className={`flex justify-end px-10 -mt-3 text-white font-Roboto text-sm text-center py-2 ${
          !profileModal ? "hidden" : "none"
        } `}
      >
        <div className="bg-[#464644] rounded-lg grid w-24 h-16 py-2">
          <button
            onClick={() => {
              navigate("/profile", { replace: true });
            }}
          >
            <p>Your Profile</p>
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login", { replace: true });
            }}
          >
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
