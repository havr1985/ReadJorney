import { useFormik } from "formik";
import * as Yup from "yup";
import { inputStyle } from "../shared/constats/constants";

export const FiltersLibrary = () => {
  const formik = useFormik({
    initialValues: {
      book: "",
      author: "",
      totalPages: "",
    },
    validationSchema: Yup.object().shape({
      book: Yup.string()
        .min(1, "Enter the title of the book!")
        .required("Required!"),
      author: Yup.string().min(1, "Enter the author!").required("Required!"),
      totalPages: Yup.number().required("Required!"),
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

      <div className=" relative">
        <input
          className={inputStyle}
          id="totalPages"
          name="TotalPages"
          onChange={formik.handleChange}
          value={formik.values.totalPages}
          placeholder="Number of pages"
          type="number"
        />
        {formik.touched.totalPages && formik.errors.totalPages ? (
          <div className=" text-[#E90516] text-xs">
            {formik.errors.totalPages}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className=" w-[120px] bg-hover-color px-5 py-2.5 mt-5 rounded-3xl text-sm border-2 border-sec-color
         hover:bg-prim-color hover:text-hover-color hover:border-inherit"
      >
        Add book
      </button>
    </form>
  );
};
