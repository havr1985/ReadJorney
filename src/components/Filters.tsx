import { useFormik } from "formik";
import * as Yup from "yup";
import { inputStyle } from "../shared/constats/constants";
import { useAppDispatch } from "../redux/hooks";
import { ChangeFilter } from "../redux/slices/filterSlice";

export const Filters = () => {

  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
    },
    validationSchema: Yup.object().shape({
      book: Yup.string().min(1, "Enter the title of the book!"),
      author: Yup.string().min(1, "Enter the author!"),
    }),
    onSubmit: (values, action) => {
      dispatch(ChangeFilter(values))
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
          id="title"
          name="title"
          placeholder="Book title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className=" text-[#E90516] text-xs">{formik.errors.title}</div>
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
        <button type="submit" className=" bg-hover-color px-7 py-3 rounded-3xl text-sm border-2 border-sec-color
         hover:bg-prim-color hover:text-hover-color hover:border-inherit">To apply</button>
      </div>
    </form>
  );
};
