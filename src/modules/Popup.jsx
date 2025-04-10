import React from "react";
import ReactDOM from "react-dom";

export default function Popup(props) {
  if (!props.open) return null;

  return ReactDOM.createPortal(
    
    <>
    {console.log(props.open)}
      <section
        onClick={props.onClose}
        className="popup fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white py-10 px-8 w-3/5 rounded-md shadow-lg content"
        >
         
          <button onClick={props.onClose} className="absolute top-2 right-2  text-sm bg-transparent bttn">
           <i class="fa-solid fa-x bg-transparent"></i>
          </button>

          
          <h1 className="text-black  font-bold text-center">{props.Title}</h1>
          
          {/* Divider */}
          <div className="flex items-center justify-center mt-4 mb-5">
            <div className="w-24 h-[4px] bg-gray-800"></div>
            <i className="fa-solid fa-star text-3xl text-gray-800 mx-4"></i>
            <div className="w-24 h-[4px] bg-gray-800"></div>
          </div>

          {/* Image */}
          <div className="w-3/4 mx-auto">
            <img className="rounded-md w-full" src={props.imgSrc} alt="Popup" />
          </div>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
}
