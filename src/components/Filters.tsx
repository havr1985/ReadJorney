import { useFormik } from "formik";
import * as Yup from "yup";
import { inputStyle } from "../shared/constats/constants";
import { CustomDarkBtn } from "./CustomDarkBtn";

export const Filters = () => {
  const formik = useFormik({
    initialValues: {
      book: "",
      author: "",
    },
    validationSchema: Yup.object().shape({
      book: Yup.string().min(1, "Enter the title of the book!"),
      author: Yup.string().min(1, "Enter the author!"),
    }),
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-2 md:gap-3.5 md:w-[295px]"
    >
      <p className=" text-xs">Filters:</p>
      <div>
        <input
          className={inputStyle}
          id="book"
          name="book"
          placeholder="Book title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.book}
        />
        {formik.touched.book && formik.errors.book ? (
          <div className=" text-[#E90516] text-xs">{formik.errors.book}</div>
        ) : null}
      </div>

      <div className=" relative">
        <input
          className={inputStyle}
          id="author"
          name="author"
          onChange={formik.handleChange}
          value={formik.values.author}
          placeholder="The author"
          type="text"
        />
        {formik.touched.author && formik.errors.author ? (
          <div className=" text-[#E90516] text-xs">{formik.errors.author}</div>
        ) : null}
      </div>

      <div className=" flex gap-3.5 items-center mt-5 md:mt-16 md:mb-[150px] md:gap-5 xl:mt-5 xl:mb-0">
        <CustomDarkBtn>To apply</CustomDarkBtn>
      </div>
    </form>
  );
};
