import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Blogs() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#323225] to-[#575747] text-white rounded-lg  mx-10 my-4">
        <div className="py-3 px-3 flex">
          <div className="outline h-10 w-10 rounded-full"></div>
          <p className="flex items-center px-3">Name of author</p>
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
      <div className="bg-gradient-to-r from-[#323225] to-[#575747] text-white rounded-lg  mx-10 my-4">
        <div className="py-3 px-3 flex">
          <div className="outline h-10 w-10 rounded-full"></div>
          <p className="flex items-center px-3">Name of author</p>
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
      <div className="bg-gradient-to-r from-[#323225] to-[#575747] text-white rounded-lg  mx-10 my-4">
        <div className="py-3 px-3 flex">
          <div className="outline h-10 w-10 rounded-full"></div>
          <p className="flex items-center px-3">Name of author</p>
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

export default Blogs;
