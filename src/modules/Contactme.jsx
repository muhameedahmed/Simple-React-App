import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contactme() {
  const [spinnerLoaded, setSpinnerLoaded] = useState(false);

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum three characters')
      .matches(/^[A-Z]/, "First letter must be uppercase")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^01[01235][0-9]{8}$/, "Invalid phone number")
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required")
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });
  function handleSubmit(values, { setSubmitting ,resetForm }) {
    setSpinnerLoaded(true); // Start the spinner
    setTimeout(() => {
      setSpinnerLoaded(false); // Stop the spinner after 3 seconds
      resetForm();
      setSubmitting(true); // Update Formik's submitting state
      console.log(values); // Log form values or handle form submission
    }, 3000);
  }

  return (
    <section className="Contactme p-10">
      <h1 className="fw-bolder">CONTACT ME</h1>
      <div className="flex items-center justify-center align-middle mt-4">
        <div className="w-24 h-[4px] bg-gray-800"></div>
        <i className="fa-solid fa-star text-3xl text-gray-800 mx-4"></i>
        <div className="w-24 h-[4px] bg-gray-800"></div>
      </div>
      <div className="form lg:mx-15 lg:px-15">
        <form onSubmit={formik.handleSubmit} className="lg:px-20 text-left">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=""
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className=""
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className=""
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-600">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              name="message"
              placeholder="Message"
              className=""
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="form-group">
            <button type="submit" className="mt-10">
              {spinnerLoaded ? (
                <i className="fa-solid fa-spinner animate-spin"></i>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
