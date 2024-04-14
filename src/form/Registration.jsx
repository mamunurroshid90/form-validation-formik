import React from "react";

import FormImage from "/public/form pic (1).jpg";
import { useFormik } from "formik";
import { signUpSchema } from "../schema/Validation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        action.resetForm();
      },
    });
  // console.log(formik);
  return (
    <>
      <div className=" flex w-3/4 mx-auto my-auto bg-white shadow rounded">
        <div className=" w-[700px] px-5 py-10">
          <form onSubmit={handleSubmit}>
            <h2 className=" text-xl font-semibold capitalize font-abel">
              welcome!
            </h2>
            <p className=" mb-5 font-abel">
              To the Mamunur website for programmers
            </p>
            <div className=" border rounded p-2 mb-4 relative">
              <label
                className=" block capitalize font-semibold font-abel"
                htmlFor="name"
              >
                name
              </label>
              <input
                className=" w-full pr-1 pt-1 pb-3 outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className=" text-red-500 font-abel text-xs absolute left-2 top-[50px] translate-y-1/2">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div className=" border rounded p-2 mb-4 relative">
              <label
                className=" block capitalize font-semibold font-abel"
                htmlFor="email"
              >
                email
              </label>
              <input
                className=" w-full pr-1 pt-1 pb-3 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className=" text-red-500 font-abel text-xs absolute left-2 top-[50px] translate-y-1/2">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className=" border rounded p-2 mb-4 relative">
              <label
                className=" block capitalize font-semibold font-abel"
                htmlFor="password"
              >
                password
              </label>
              <input
                className=" w-full pr-1 pt-1 pb-3 outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className=" text-red-500 font-abel text-xs absolute left-2 top-[50px] translate-y-1/2">
                  {errors.password}
                </p>
              ) : null}
            </div>
            <div className=" border rounded p-2 mb-4 relative">
              <label
                className=" block capitalize font-semibold font-abel"
                htmlFor="cPassword"
              >
                confirm password
              </label>
              <input
                className=" w-full pr-1 pt-1 pb-3 outline-none"
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Enter your confirm password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className=" text-red-500 font-abel text-xs absolute left-2 top-[50px] translate-y-1/2">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
            <div className=" flex justify-between items-center mb-7">
              <p className=" font-abel text-sm">
                Want to register using Gmail?
              </p>
              <div>
                <button
                  type="submit"
                  className=" bg-blue-600 py-2 px-4 rounded uppercase font-abel font-semibold text-white"
                >
                  registration
                </button>
              </div>
            </div>
          </form>
          <p className=" text-center text-sm font-abel">
            <span className=" font-bold">Already have an account?</span>{" "}
            <span>Sign In now</span>
          </p>
        </div>
        <div className=" w-[700px] h-[650px]">
          <img className=" w-full h-full" src={FormImage} alt="form-image" />
        </div>
      </div>
    </>
  );
};

export default Registration;
