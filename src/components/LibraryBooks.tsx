import { useGetUsersBookQuery } from "../redux/api/books/bookApi";
import { useAppSelector } from "../redux/hooks";
import { selectLibraryBooks } from "../redux/slices/librarySlice";
import { BookCard } from "./BookCard";
import booksImage from "../assets/📚book2.png";
import { LibraryFilters } from "./LibraryFilters";
import { selectLibraryFilter } from "../redux/slices/libraryFilterSlice";

export const LibraryBooks = () => {
  const status: string | null = useAppSelector(selectLibraryFilter)
  const { isLoading } = useGetUsersBookQuery({ status });
  const libraryBook = useAppSelector(selectLibraryBooks);

  return (
    <div className=" bg-bg-dark rounded-xl py-10 px-5 mt-2.5 md:px-10 md:mt-4 xl:w-full">
      {isLoading && <div>Loading....</div>}
      <div className=" flex justify-between">
        <div className=" text-xl font-bold -tracking-wider md:text-3xl md:-tracking-tight">
          LibraryBooks
        </div>
        <LibraryFilters />
      </div>

      {libraryBook === undefined || !libraryBook.length  ? (
        <div className=" mt-16 flex flex-col items-center justify-center gap-2.5 md:gap-5 md:mt-40">
          <div
            className=" w-[100px] h-[100px] bg-[#262626] rounded-full flex items-center justify-center 
          md:w-[130px] md:h-[130px]"
          >
            <img
              src={booksImage}
              alt="books"
              className=" w-[50px] h-[50px] md:w-[70px] md:h-[50px]"
            />
          </div>
          <div className=" w-[197px] text-center pb-16 md:w-[274px] md:pb-40">
            <p className=" text-sm">
              To start training, add{" "}
              <span className=" text-sec-color">some of your books</span> or
              from the recommended ones
            </p>
          </div>
        </div>
      ) : (
        <ul className=" flex justify-between flex-wrap mt-2.5 md:flex-wrap md:justify-normal md:gap-8 md:mt-3.5">
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
      )}
    </div>
  );
};
