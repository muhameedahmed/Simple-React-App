import React from 'react'

export default function About() {
  return (
    <>
    <section className="About p-10 mt-20 w-full ">
    <h1 className='fw-bolder text-white'>ABOUT</h1>
      <div className="flex items-center justify-center align-middle mt-4">
          <div className="w-24 h-[4px] bg-white"></div>
          <i className="fa-solid fa-star text-3xl text-white mx-4"></i>
          <div className="w-24 h-[4px] bg-white"></div>
        </div>
        <div className=" flex flex-col lg:flex-row lg:mx-50 text-left">
            <div className="sec ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
            <div className="sec ">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
        </div>
    </section>
      
    </>
  )
}
