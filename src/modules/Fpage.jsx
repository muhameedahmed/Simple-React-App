import React from 'react'
import avatar from '../assets/avatar.svg';
export default function Fpage() {
  return (
    <>
    <section  className='bg-teal-500 w-full  flex justify-center items-center pt-60 pb-10'>
    <div className=" fsection flex flex-col items-center justify-end gap-10">
    <div className="img"><img  width={250} src={avatar} /></div>
      
      
      <h1 className="fw-bolder text-white">START REACT</h1>
      </div>
    </section>
      
    </>
  )
}
