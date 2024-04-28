import { MyBook } from "../components/MyBook"
import { ReadingDashboardContent } from "../components/ReadingDashboardContent"
import { useGetBookByIdQuery } from "../redux/api/books/bookApi";


const ReadingPage = () => {
  const id = localStorage.getItem("readingBookId");

  const { data, isError, isLoading, isSuccess } = useGetBookByIdQuery({ id });
  
  return (
    <div className=" xl:flex xl:gap-4">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {isSuccess && (
        <>
          <ReadingDashboardContent currentBook={data.progress} _id={data._id} totalPages={data.totalPages} />
          <MyBook currentBook={data} />
        </>
      )}
    </div>
  );
}

export default ReadingPage