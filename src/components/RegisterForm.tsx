import * as Yup from "yup";
import { inputStyle } from "../shared/constats/constants";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { CustomBtn } from "./CustomBtn";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/users/userApi";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register] = useRegisterMutation();

  const handleToglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required!"),
      email: Yup.string()
        .required("Required!")
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid Email"),
      password: Yup.string()
        .required("Required!")
        .min(7, "Enter a valid Password"),
    }),
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-2 md:gap-3.5"
    >
      <div>
        <input
          className={inputStyle}
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className=" text-[#E90516] text-xs">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <input
          className={inputStyle}
          id="email"
          name="email"
          placeholder="Mail"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className=" text-[#E90516] text-xs">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className=" relative md:max-w-[472px]">
        <input
          className={inputStyle}
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className=" text-[#E90516] text-xs">
            {formik.errors.password}
          </div>
        ) : null}
        <button type="button" onClick={handleToglePassword}>
          {showPassword ? (
            <Eye size={18} className=" absolute top-4 right-4 md:right-5" />
          ) : (
            <EyeOff size={18} className=" absolute top-4 right-4 md:right-5" />
          )}
        </button>
      </div>

      <div className=" flex gap-3.5 items-center mt-5 md:mt-16 md:mb-[150px] md:gap-5 xl:mb-[82px]">
        <CustomBtn>Registration</CustomBtn>
        <Link
          to="/login"
          className=" text-sec-color text-xs tracking-tighter font-medium md:text-sm"
        >
          Already have an account?
        </Link>
      </div>
    </form>
  );
};
