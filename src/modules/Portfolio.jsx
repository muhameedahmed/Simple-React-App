import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Popup from "./Popup";

export default function Portfolio() {
  const [isopen, Setopen] = useState(false);
  const [imgSrc, Setsrc] = useState([
    import.meta.env.BASE_URL + "imgs/cabin.png",
    import.meta.env.BASE_URL + "imgs/cake.png",
    import.meta.env.BASE_URL + "imgs/circus.png",
    import.meta.env.BASE_URL + "imgs/game.png",
    import.meta.env.BASE_URL + "imgs/safe.png",
    import.meta.env.BASE_URL + "imgs/submarine.png",
  ]);
  const [Title, Settitle] = useState([
    "LOG CABIN",
    "TASTY CAKE",
    "CIRCUS TENT",
    "CONTROLER",
    "LOCKED SAFE",
    "SUBMARINE",
  ]);
  const [index, Setindex] = useState(null);

  const handleClick = (newIndex) => {
    Setopen(true);
    Setindex(newIndex);
  };

  return (
    <>
      <section className="w-full p-4 m-10 flex flex-col text-center justify-center align-middle mx-auto Portfolio relative">
        <h1 className="fw-bolder ">PORTFOLIO</h1>
        <div className="flex items-center justify-center align-middle mt-4">
          <div className="w-24 h-[4px] bg-gray-800"></div>
          <i className="fa-solid fa-star text-3xl text-gray-800 mx-4"></i>
          <div className="w-24 h-[4px] bg-gray-800"></div>
        </div>

        {/* Popup */}
        <Popup
          onClose={() => Setopen(false)}
          open={isopen}
          imgSrc={index !== null ? imgSrc[index] : ""}
          Title={index !== null ? Title[index] : ""}
        />

        <div className="items flex flex-row flex-wrap md:m-10 p-10">
          {imgSrc.map((src, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="item w-full lg:w-1/3 p-5 relative group cursor-pointer"
            >
              <div className="relative">
                <img className="rounded-md w-full" src={src} alt={Title[i]} />
                <div className="hover">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
