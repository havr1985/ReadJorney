import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { ChangeLibraryFilter } from "../redux/slices/libraryFilterSlice";

export const LibraryFilters = () => {
  const [formData, setFormData] = useState({ selectedOption: "" });
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData({ selectedOption: value });
    dispatch(ChangeLibraryFilter(value));
  };

  return (
    <form>
      <select
        name="selectedOption"
        value={formData.selectedOption}
        onChange={handleChange}
        className=" bg-hover-color outline-none font-medium text-xs px-3.5 py-3 rounded-xl border-2 border-sec-color 
        md:py-3.5 md:text-sm"
      >
        <option value="">All books</option>
        <option value="unread">Unread</option>
        <option value="in-progress">In-progress</option>
        <option value="done">Done</option>
      </select>
    </form>
  );
};
