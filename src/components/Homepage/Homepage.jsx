import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.jpg";
function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="grid grid-cols-12    ">
        <div className="flex col-span-10 h-auto justify-between items-center px-10">
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
          <div className="h-9 w-12 rounded-full shadow-lg outline-dotted flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="h-7 w-7  rounded-full" />
          </div>
          <p className="text-xs px-1  h-full flex items-center">Hamza Bashir</p>
          <FontAwesomeIcon icon={faGear} className="h-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#323225] to-[#575747] text-white rounded-lg  mx-10">
        <div className="py-3 px-3 flex">
          <div className="outline h-10 w-10 rounded-full"></div>
          <p className="flex items-center px-3">Hamza Bashir</p>
        </div>
        <div>
          <p className="font-Roboto text-sm pt-2 px-10 pb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dolorem repellat voluptates dolorum atque tenetur hic modi
            similique, saepe placeat amet temporibus quos dicta? Ratione,
            quibusdam nostrum. Adipisci, odio obcaecati. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Architecto totam qui vero
            maiores! Adipisci odio provident a pariatur aspernatur repellendus
            ipsam? Voluptate eaque mollitia assumenda commodi impedit ea sit
            quasi?
          </p>
        </div>
        <div className="flex">
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="hover:-translate-y-0.5 mx-5 mt-3"
              color="white"
              size="lg"
            />
            <p className="text-xs mx-3 pb-3">2 Likes</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="hover:-translate-y-0.5 mx-5 mt-3"
              color="white"
              size="lg"
            />
            <p className="text-xs mx-3 pb-3">2 Dislikes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
