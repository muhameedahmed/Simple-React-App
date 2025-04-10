import React from 'react'

export default function Lastsec() {
  return (
    <>
    <section >
    <div className="Fp flex  flex-col lg:flex-row  p-10 mx-auto bottom-0 gap-4">
        <div className="sec  w-full lg:w-1/3 p-3 shadow-2xl shadow-gray-700"><h2 className='uppercase font-bold  pb-4 lg:text-2xl'>Location</h2>
        <p> 2215 John Daniel Drive <br />
        Clark, MO 65243</p>
        </div>
        <div className="sec w-full lg:w-1/3 p-3 shadow-2xl shadow-gray-700 "><h2 className='uppercase font-bold pb-4 lg:text-xl' >Around the web</h2>
        <div className=" flex flex-row justify-around lg:gap-2 lg:p-10  ">
        <div className="i "> <i className="fa-brands fa-facebook-f w-1/4 "></i></div>
        <div className="i  "><i className="fa-brands fa-twitter w-1/4"></i></div>
        <div className="i "><i className="fa-brands fa-linkedin-in w-1/4"></i></div>
        <div className="i " >  <i className="fa-brands fa-youtube w-1/4"></i></div>
        

      
        </div>
        </div>
        <div className="sec w-full  lg:w-1/3 p-3 shadow-2xl shadow-gray-700 "><h2 className='uppercase font-bold lg:text-2xl'>About freelancer</h2><p className=' p-5'>Freelance is a free to use, MIT licensed Bootstrap <br /> theme created by Hamza Nouh</p></div>
      </div>
      <div className="copyright bg-gray-800 text-center p-5">
        <p>Copyright © Hamza Nouh 2022</p>
      </div>
    </section>
      
    </>
  )
}
