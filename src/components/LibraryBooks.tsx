import { useGetUsersBookQuery } from "../redux/api/books/bookApi";
import { useAppSelector } from "../redux/hooks";
import { selectLibraryBooks } from "../redux/slices/librarySlice";
import { BookCard } from "./BookCard";

export const LibraryBooks = () => {
  const { isLoading } = useGetUsersBookQuery();
  const libraryBook = useAppSelector(selectLibraryBooks);

  return (
    <div className=" bg-bg-dark rounded-xl py-10 px-5 mt-2.5 md:px-10 md:mt-4">
      {isLoading && <div>Loading....</div>}
      <div>LibraryBooks</div>
      <ul className=" flex justify-between flex-wrap md:flex-wrap md:justify-normal md:gap-8">
        {libraryBook.map(({ title, _id, author, imageUrl, totalPages }) => (
          <li
            key={_id}
            className=" w-[127px]  md:w-[132px] xl:w-[162px] cursor-pointer"
          >
            <BookCard
              title={title}
              _id={_id}
              author={author}
              imageUrl={imageUrl}
              totalPages={totalPages}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
