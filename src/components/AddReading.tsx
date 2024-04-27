import { useFormik } from "formik";
import * as Yup from "yup";
import { inputStyle } from "../shared/constats/constants";
import { CustomDarkBtn } from "./CustomDarkBtn";

export const AddReading = () => {
  const formik = useFormik({
    initialValues: {
      pageNumber: 0,
    },
    validationSchema: Yup.object().shape({
      pageNumber: Yup.number().required("Required!"),
    }),
    onSubmit: (values, action) => {
      console.log(values);

      action.resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-2 md:gap-3.5 md:mr-5 md:w-[45%] xl:w-full"
    >
      <p className=" text-xs font-medium md:text-sm">Start page:</p>
      <div>
        <input
          className={inputStyle}
          id="pageNumber"
          name="pageNumber"
          placeholder="Page number"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.pageNumber}
        />
        {formik.touched.pageNumber && formik.errors.pageNumber ? (
          <div className=" text-[#E90516] text-xs">
            {formik.errors.pageNumber}
          </div>
        ) : null}
      </div>

      <div className=" mt-5">
        <CustomDarkBtn type="submit">To start</CustomDarkBtn>
      </div>
    </form>
  );
};
